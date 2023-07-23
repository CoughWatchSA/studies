import { SurveyEngine } from "case-editor-tools/surveys";
import { ItemEditor } from "case-editor-tools/surveys/survey-editor/item-editor";
import { Expression, SurveyItem, SurveySingleItem } from "survey-engine/data_types";
import { generateLocStrings, Survey } from "../../../../common/types";
import { ParticipantFlags } from "../../participantFalgs";
import { strings } from "./data/strings";

import * as helpers from "../../../../common/helpers";

import {
  Q01_1_SymptomsSameEpisode,
  Q01_SymptomsAny,
  Q02_SymptomsWhich,
  Q03_SymptomsEnded,
  Q04_SymptomsStarted,
  Q05_1_Temperature,
  Q05_FeverStarted,
  Q06_1_SeekCareWhich,
  Q06_2_SeekCareOther,
  Q06_3_SeekCareOtherWhich,
  Q06_SeekCare,
  Q07_1a_InfluenzaTestResults,
  Q07_1b_CovidTestResults,
  Q07_2a_InfluenzaTestType,
  Q07_2b_CovidTestType,
  Q07_3a_InfluenzaTestDate,
  Q07_3b_CovidTestDate,
  Q07_TestTakenAny,
  Q08_MedicationAny,
  Q09_1_TimeOff,
  Q09_2_TimeOffDays,
  Q09_RoutineChange,
} from "./questions";
import { datePickerKey } from "case-editor-tools/constants/key-definitions";

class Weekly extends Survey {
  static surveyKey = "weekly";

  q03_symptoms_ended: SurveySingleItem;
  q04_symptoms_start: SurveySingleItem;
  q01_1_symptoms_same_episode: SurveySingleItem;

  constructor() {
    super(Weekly.surveyKey, strings);

    this.q01_1_symptoms_same_episode = this.buildQuestion(Q01_1_SymptomsSameEpisode);
    this.q04_symptoms_start = this.buildQuestion(Q04_SymptomsStarted);
    this.q03_symptoms_ended = this.buildQuestion(Q03_SymptomsEnded);
  }

  addConditionalItem(item: SurveyItem, condition: Expression) {
    if (condition) item.condition = condition;

    super.addItem(item);
  }

  buildSurvey() {
    const hasOngoingSymptoms = SurveyEngine.participantFlags.hasKey(ParticipantFlags.ongoingSymptomsStart.key);
    const ongoingSymptomsStart = SurveyEngine.participantFlags.getAsNum(ParticipantFlags.ongoingSymptomsStart.key);

    const q01_symptoms_any = this.addQuestion(Q01_SymptomsAny);

    const hasSymptoms = SurveyEngine.singleChoice.any(q01_symptoms_any.key, Q01_SymptomsAny.Responses.Yes.value);

    this.addConditionalItem(this.q01_1_symptoms_same_episode, SurveyEngine.logic.and(hasSymptoms, hasOngoingSymptoms));

    const isSameEpisode = SurveyEngine.singleChoice.any(
      this.q01_1_symptoms_same_episode.key,
      Q01_1_SymptomsSameEpisode.Responses.Yes.value
    );

    const q02_symptoms_which = this.addQuestion(Q02_SymptomsWhich, hasSymptoms);

    const hasFever = SurveyEngine.multipleChoice.any(q02_symptoms_which.key, Q02_SymptomsWhich.Responses.Fever.value);

    this.addPageBreak();

    this.addConditionalItem(
      this.q04_symptoms_start,
      SurveyEngine.logic.and(hasSymptoms, SurveyEngine.logic.not(isSameEpisode))
    );

    const hasDate = (item: SurveySingleItem, dateValue?: string) => {
      if (dateValue !== undefined) {
        return SurveyEngine.logic.or(
          SurveyEngine.logic.not(SurveyEngine.singleChoice.any(item.key, dateValue)),
          SurveyEngine.isDefined(helpers.responses.getValue(item))
        );
      } else {
        return SurveyEngine.isDefined(helpers.responses.getValue(item));
      }
    };

    const startsBeforeEnding = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(this.q04_symptoms_start)),
        SurveyEngine.logic.not(helpers.responses.getValue(this.q03_symptoms_ended)),
        SurveyEngine.compare.lte(
          helpers.responses.getValue(this.q04_symptoms_start),
          helpers.responses.getValue(this.q03_symptoms_ended)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(isSameEpisode),
        SurveyEngine.logic.not(ongoingSymptomsStart),
        SurveyEngine.logic.not(helpers.responses.getValue(this.q03_symptoms_ended)),
        SurveyEngine.compare.lte(ongoingSymptomsStart, helpers.responses.getValue(this.q03_symptoms_ended))
      )
    );

    this.addValidation(this.q04_symptoms_start, startsBeforeEnding, "start_before_end", strings["starts_after_ending"]);

    // this.addValidation(
    //   this.q04_symptoms_start,
    //   hasDate(this.q04_symptoms_start),
    //   "has_date",
    //   strings["no_date"]
    // );

    this.addConditionalItem(this.q03_symptoms_ended, hasSymptoms);

    this.addValidation(this.q03_symptoms_ended, startsBeforeEnding, "end_after_start", strings["ends_before_starting"]);

    this.addValidation(
      this.q03_symptoms_ended,
      hasDate(this.q03_symptoms_ended, Q03_SymptomsEnded.Responses.Yes.value),
      "has_date",
      strings["no_date"]
    );

    this.addPageBreak();

    const q05_fever_started = this.addQuestion(Q05_FeverStarted, SurveyEngine.logic.and(hasSymptoms, hasFever));

    const afterSymptomsStart = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(this.q04_symptoms_start)),
        SurveyEngine.logic.not(helpers.responses.getValue(q05_fever_started)),
        SurveyEngine.compare.gte(
          helpers.responses.getValue(q05_fever_started),
          helpers.responses.getValue(this.q04_symptoms_start)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(isSameEpisode),
        SurveyEngine.logic.not(ongoingSymptomsStart),
        SurveyEngine.logic.not(helpers.responses.getValue(q05_fever_started)),
        SurveyEngine.compare.gte(helpers.responses.getValue(q05_fever_started), ongoingSymptomsStart)
      )
    );

    const beforeSymptomsEnd = SurveyEngine.logic.or(
      SurveyEngine.logic.not(helpers.responses.getValue(this.q03_symptoms_ended)),
      SurveyEngine.logic.not(helpers.responses.getValue(q05_fever_started)),
      SurveyEngine.compare.lte(
        helpers.responses.getValue(q05_fever_started),
        helpers.responses.getValue(this.q03_symptoms_ended)
      )
    );

    this.addValidation(q05_fever_started, afterSymptomsStart, "after_symptoms_start", strings["before_symptoms_start"]);
    this.addValidation(q05_fever_started, beforeSymptomsEnd, "before_symptoms_end", strings["after_symptoms_end"]);

    this.addQuestion(Q05_1_Temperature, SurveyEngine.logic.and(hasSymptoms, hasFever));

    this.addPageBreak();

    const q06_seek_care = this.addQuestion(Q06_SeekCare, hasSymptoms);

    const hasSoughtCare = SurveyEngine.singleChoice.any(q06_seek_care.key, Q06_SeekCare.Responses.Yes.value);

    this.addQuestion(Q06_1_SeekCareWhich, SurveyEngine.logic.and(hasSymptoms, hasSoughtCare));

    const q06_2_seek_care_other = this.addQuestion(Q06_2_SeekCareOther, hasSymptoms);

    const hasSoughtCareOther = SurveyEngine.singleChoice.any(
      q06_2_seek_care_other.key,
      Q06_2_SeekCareOther.Responses.Yes.value
    );

    this.addQuestion(Q06_3_SeekCareOtherWhich, SurveyEngine.logic.and(hasSymptoms, hasSoughtCareOther));

    this.addPageBreak();

    const q07_test_taken_any = this.addQuestion(Q07_TestTakenAny, hasSymptoms);

    const hasTestedInfluenza = SurveyEngine.multipleChoice.any(
      q07_test_taken_any.key,
      Q07_TestTakenAny.Responses.Influenza.value
    );
    const hasTestedCovid = SurveyEngine.multipleChoice.any(
      q07_test_taken_any.key,
      Q07_TestTakenAny.Responses.Covid.value
    );

    this.addQuestion(Q07_1a_InfluenzaTestResults, SurveyEngine.logic.and(hasSymptoms, hasTestedInfluenza));

    this.addQuestion(Q07_2a_InfluenzaTestType, SurveyEngine.logic.and(hasSymptoms, hasTestedInfluenza));

    this.addQuestion(Q07_3a_InfluenzaTestDate, SurveyEngine.logic.and(hasSymptoms, hasTestedInfluenza));

    this.addQuestion(Q07_1b_CovidTestResults, SurveyEngine.logic.and(hasSymptoms, hasTestedCovid));

    this.addQuestion(Q07_2b_CovidTestType, SurveyEngine.logic.and(hasSymptoms, hasTestedCovid));

    this.addQuestion(Q07_3b_CovidTestDate, SurveyEngine.logic.and(hasSymptoms, hasTestedCovid));

    this.addPageBreak();

    this.addQuestion(Q08_MedicationAny, hasSymptoms);

    this.addQuestion(Q09_RoutineChange, hasSymptoms);

    const q09_1_time_off = this.addQuestion(Q09_1_TimeOff, hasSymptoms);

    const hasTimeOff = SurveyEngine.singleChoice.any(q09_1_time_off.key, Q09_1_TimeOff.Responses.Yes.value);

    this.addQuestion(Q09_2_TimeOffDays, SurveyEngine.logic.and(hasSymptoms, hasTimeOff));
  }
}

export const weekly = new Weekly();
