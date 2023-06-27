import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";
import { StudyRules } from "case-editor-tools/types/studyRules";
import { Expression } from "survey-engine/data_types";
import { textInputResponseKey } from "../../common/constants";
import { messages } from "./messages";
import { ParticipantFlags } from "./participantFalgs";
import { intake } from "./surveys/intake";
import { vaccination } from "./surveys/vaccination";
import { weekly } from "./surveys/weekly";
import { Q03_SymptomsEnded } from "./surveys/weekly/questions/q03_symptoms_ended";
import { swabZipCodes } from "./surveys/intake/constants";

const entryRules: Expression[] = [
  StudyEngine.participantActions.assignedSurveys.add(intake.key, "normal"),
  StudyEngine.participantActions.assignedSurveys.add(vaccination.key, "normal"),
  StudyEngine.participantActions.assignedSurveys.add(weekly.key, "normal"),
];

const handleIntake = StudyEngine.ifThen(
  StudyEngine.checkSurveyResponseKey(intake.key),
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
      ParticipantFlags.hasOnGoingSymptoms.values.yes
    ),
    // else:
    StudyEngine.participantActions.updateFlag(
      ParticipantFlags.eligibleForSwab.key,
      ParticipantFlags.eligibleForSwab.values.no
    )
  )
);

const handleWeekly = StudyEngine.ifThen(
  StudyEngine.checkSurveyResponseKey(weekly.key),
  // remove weekly and re-add it with new a new timeout
  StudyEngine.participantActions.assignedSurveys.remove(weekly.key, "all"),
  StudyEngine.participantActions.assignedSurveys.add(
    weekly.key,
    "prio",
    StudyEngine.timestampWithOffset({
      hours: 1,
    })
  ),
  // Manage flags:
  StudyEngine.if(
    // if has ongoing symptoms:
    StudyEngine.singleChoice.any(weekly.q03_symptoms_ended.key, Q03_SymptomsEnded.Responses.Ongoing.value),
    // then:
    StudyEngine.participantActions.updateFlag(
      ParticipantFlags.hasOnGoingSymptoms.key,
      ParticipantFlags.hasOnGoingSymptoms.values.yes
    ),
    // else:
    StudyEngine.participantActions.updateFlag(
      ParticipantFlags.hasOnGoingSymptoms.key,
      ParticipantFlags.hasOnGoingSymptoms.values.no
    )
  ),
  StudyEngine.if(
    // if is swab eligible:
    StudyEngine.and(
      StudyEngine.participantState.hasParticipantFlagKeyAndValue(
        ParticipantFlags.eligibleForSwab.key,
        ParticipantFlags.eligibleForSwab.values.yes
      ),
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

export const studyRules = new StudyRules(entryRules, [handleIntake, handleWeekly]);
