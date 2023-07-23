import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";
import { StudyRules } from "case-editor-tools/types/studyRules";
import { datePickerKey, responseGroupKey, singleChoiceKey } from "case-editor-tools/constants/key-definitions";
import { Expression } from "survey-engine/data_types";
import { textInputResponseKey } from "../../common/constants";
import { messages } from "./messages";
import { ParticipantFlags } from "./participantFalgs";
import { intake } from "./surveys/intake";
import { vaccination } from "./surveys/vaccination";
import { weekly } from "./surveys/weekly";
import { Q03_SymptomsEnded } from "./surveys/weekly/questions/q03_symptoms_ended";
import { swabZipCodes } from "./surveys/intake/constants";
import { Q01_1_SymptomsSameEpisode, Q04_SymptomsStarted } from "./surveys/weekly/questions";

const Options = {
  weeklyResubmitHours: 4,
  vaccinationResubmitDays: 30,
};

const entryRules: Expression[] = [
  StudyEngine.participantActions.assignedSurveys.add(intake.key, "prio"),
];

const handleIntake = StudyEngine.ifThen(
  StudyEngine.checkSurveyResponseKey(intake.key),
  // remove assigned intake
  StudyEngine.participantActions.assignedSurveys.remove(intake.key, "all"),
  // add weekly survey if not already there
  StudyEngine.ifThen(
    StudyEngine.not(StudyEngine.participantState.hasSurveyKeyAssigned(weekly.key)),
    StudyEngine.participantActions.assignedSurveys.add(weekly.key, "prio"),
    StudyEngine.participantActions.assignedSurveys.add(vaccination.key, "prio")
  ),
  // add optional intake
  StudyEngine.participantActions.assignedSurveys.add(intake.key, "optional"),
  // maybe add swab eligible flag
  StudyEngine.if(
    // if eligible for swab:
    StudyEngine.or(
      ...swabZipCodes.map((zip) =>
        StudyEngine.hasResponseKeyWithValue(intake.q03_postal_code.key, textInputResponseKey, zip)
      )
    ),
    // then:
    StudyEngine.participantActions.updateFlag(
      ParticipantFlags.eligibleForSwab.key,
      ParticipantFlags.eligibleForSwab.values.yes
    ),
    // else:
    StudyEngine.participantActions.updateFlag(
      ParticipantFlags.eligibleForSwab.key,
      ParticipantFlags.eligibleForSwab.values.no
    )
  )
);

const symptomsStart = StudyEngine.getResponseValueAsNum(
  weekly.q04_symptoms_start.key,
  `${responseGroupKey}.${datePickerKey}`
);

const handleWeekly = StudyEngine.ifThen(
  StudyEngine.checkSurveyResponseKey(weekly.key),
  // remove weekly and re-add it with new a new timeout
  StudyEngine.participantActions.assignedSurveys.remove(weekly.key, "all"),
  StudyEngine.participantActions.assignedSurveys.add(
    weekly.key,
    "prio",
    StudyEngine.timestampWithOffset({
      hours: Options.weeklyResubmitHours,
    })
  ),
  // Manage flags:
  StudyEngine.if(
    // if has ongoing symptoms:
    StudyEngine.singleChoice.any(weekly.q03_symptoms_ended.key, Q03_SymptomsEnded.Responses.Ongoing.value),
    // then:
    StudyEngine.if(
      // if had ongoing symptoms previously and part of the same episode, use the same date
      StudyEngine.and(
        StudyEngine.participantState.hasParticipantFlagKey(ParticipantFlags.ongoingSymptomsStart.key),
        StudyEngine.singleChoice.any(
          weekly.q01_1_symptoms_same_episode.key,
          Q01_1_SymptomsSameEpisode.Responses.Yes.value
        )
      ),
      StudyEngine.participantActions.updateFlag(
        ParticipantFlags.ongoingSymptomsStart.key,
        StudyEngine.participantState.getParticipantFlagValueAsNum(ParticipantFlags.ongoingSymptomsStart.key)
      ),
      // if not use the specified date
      StudyEngine.participantActions.updateFlag(ParticipantFlags.ongoingSymptomsStart.key, symptomsStart)
    ),
    // else, remove the flag
    StudyEngine.participantActions.removeFlag(ParticipantFlags.ongoingSymptomsStart.key)
  ),
  // send swab invitation if:
  StudyEngine.if(
    StudyEngine.and(
      // has ongoing symptoms
      StudyEngine.singleChoice.any(weekly.q03_symptoms_ended.key, Q03_SymptomsEnded.Responses.Ongoing.value),
      // swab eligible:
      StudyEngine.participantState.hasParticipantFlagKeyAndValue(
        ParticipantFlags.eligibleForSwab.key,
        ParticipantFlags.eligibleForSwab.values.yes
      ),
      // not invited previously:
      StudyEngine.not(StudyEngine.participantState.hasParticipantFlagKey(ParticipantFlags.invitedForSwabOn.key))
    ),
    // then:
    StudyEngine.do(
      // create a participant message
      StudyEngine.participantActions.messages.add(
        messages.inviteSelfSwab,
        StudyEngine.timestampWithOffset({ days: 0 })
      ),
      // save the invitation time
      StudyEngine.participantActions.updateFlag(
        ParticipantFlags.invitedForSwabOn.key,
        StudyEngine.timestampWithOffset({ seconds: 0 })
      )
    )
  )
);

const handleVaccination = StudyEngine.ifThen(
  StudyEngine.checkSurveyResponseKey(vaccination.key),
  // remove vaccination and re-add it with a new timeout
  StudyEngine.participantActions.assignedSurveys.remove(vaccination.key, "all"),
  StudyEngine.participantActions.assignedSurveys.add(
    vaccination.key,
    "prio",
    StudyEngine.timestampWithOffset({
      days: Options.vaccinationResubmitDays,
    })
  )
);

export const studyRules = new StudyRules(entryRules, [handleIntake, handleWeekly, handleVaccination]);
