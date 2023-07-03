import { SurveyEngine } from "case-editor-tools/surveys";
import { ItemEditor } from "case-editor-tools/surveys/survey-editor/item-editor";
import { SurveySingleItem } from "survey-engine/data_types";
import { generateLocStrings, Survey } from "../../../../common/types";
import { ParticipantFlags } from "../../participantFalgs";
import { strings } from "./data/strings";

import * as helpers from "../../../../common/helpers"

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

class Weekly extends Survey {
  static surveyKey = "weekly";

  q01_symptoms_any: SurveySingleItem;
  q01_1_symptoms_same_episode: SurveySingleItem;
  q03_symptoms_ended: SurveySingleItem;
  q04_symptoms_start: SurveySingleItem;
  q05_fever_started: SurveySingleItem;
  q06_seek_care: SurveySingleItem;
  q06_1_seek_care_which: SurveySingleItem;
  q06_2_seek_care_other: SurveySingleItem;
  q06_3_seek_care_other_which: SurveySingleItem;
  q02_symptoms_which: SurveySingleItem;
  q05_1_temperature: SurveySingleItem;
  q07_test_taken_any: SurveySingleItem;
  q07_1a_influenza_test_results: SurveySingleItem;
  q07_2a_influenza_test_type: SurveySingleItem;
  q07_3a_influenza_test_date: SurveySingleItem;
  q08_medication_any: SurveySingleItem;
  q09_routine_change: SurveySingleItem;
  q09_1_time_off: SurveySingleItem;
  q09_2_time_off_days: SurveySingleItem;
  q07_1b_covid_test_results: SurveySingleItem;
  q07_2b_covid_test_type: SurveySingleItem;
  q07_3b_covid_test_date: SurveySingleItem;

  constructor() {
    super(Weekly.surveyKey, strings);

    this.q01_symptoms_any = this.buildQuestion(Q01_SymptomsAny);

    this.q01_1_symptoms_same_episode = this.buildQuestion(Q01_1_SymptomsSameEpisode);

    this.q02_symptoms_which = this.buildQuestion(Q02_SymptomsWhich);

    this.q03_symptoms_ended = this.buildQuestion(Q03_SymptomsEnded);

    this.q04_symptoms_start = this.buildQuestion(Q04_SymptomsStarted);

    this.q05_fever_started = this.buildQuestion(Q05_FeverStarted);

    this.q06_seek_care = this.buildQuestion(Q06_SeekCare);

    this.q06_1_seek_care_which = this.buildQuestion(Q06_1_SeekCareWhich);

    this.q06_2_seek_care_other = this.buildQuestion(Q06_2_SeekCareOther);

    this.q06_3_seek_care_other_which = this.buildQuestion(Q06_3_SeekCareOtherWhich);

    this.q05_1_temperature = this.buildQuestion(Q05_1_Temperature);

    this.q07_test_taken_any = this.buildQuestion(Q07_TestTakenAny);

    this.q07_1a_influenza_test_results = this.buildQuestion(Q07_1a_InfluenzaTestResults);

    this.q07_2a_influenza_test_type = this.buildQuestion(Q07_2a_InfluenzaTestType);

    this.q07_3a_influenza_test_date = this.buildQuestion(Q07_3a_InfluenzaTestDate);

    this.q07_1b_covid_test_results = this.buildQuestion(Q07_1b_CovidTestResults);

    this.q07_2b_covid_test_type = this.buildQuestion(Q07_2b_CovidTestType);

    this.q07_3b_covid_test_date = this.buildQuestion(Q07_3b_CovidTestDate);

    this.q08_medication_any = this.buildQuestion(Q08_MedicationAny);

    this.q09_routine_change = this.buildQuestion(Q09_RoutineChange);

    this.q09_1_time_off = this.buildQuestion(Q09_1_TimeOff);

    this.q09_2_time_off_days = this.buildQuestion(Q09_2_TimeOffDays);
  }

  buildSurvey() {
    const isOngoing = SurveyEngine.participantFlags.hasKeyAndValue(
      ParticipantFlags.hasOnGoingSymptoms.key,
      ParticipantFlags.hasOnGoingSymptoms.values.yes
    );

    this.addItem(this.q01_symptoms_any);

    const hasSymptoms = SurveyEngine.singleChoice.any(this.q01_symptoms_any.key, Q01_SymptomsAny.Responses.Yes.value);

    this.addConditionalItem(this.q01_1_symptoms_same_episode, SurveyEngine.logic.and(hasSymptoms, isOngoing));

    const isSameEpisode = SurveyEngine.singleChoice.any(
      this.q01_1_symptoms_same_episode.key,
      Q01_1_SymptomsSameEpisode.Responses.Yes.value
    );

    this.addConditionalItem(this.q02_symptoms_which, hasSymptoms);

    const hasFever = SurveyEngine.multipleChoice.any(
      this.q02_symptoms_which.key,
      Q02_SymptomsWhich.Responses.Fever.value
    );

    this.addPageBreak();

    const startsBeforeEnding = SurveyEngine.logic.or(
      SurveyEngine.logic.not(helpers.responses.getValue(this.q04_symptoms_start)),
      SurveyEngine.logic.not(helpers.responses.getValue(this.q03_symptoms_ended)),
      SurveyEngine.compare.lte(
        helpers.responses.getValue(this.q04_symptoms_start),
        helpers.responses.getValue(this.q03_symptoms_ended)
      )
    );

    new ItemEditor(this.q04_symptoms_start).addValidation({
      key: "start_before_end",
      rule: startsBeforeEnding,
      type: "hard",
    });

    new ItemEditor(this.q04_symptoms_start).addDisplayComponent({
      role: "error",
      content: generateLocStrings(strings["starts_after_ending"]),
      displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "start_before_end")),
    });

    this.addConditionalItem(
      this.q04_symptoms_start,
      SurveyEngine.logic.and(hasSymptoms, SurveyEngine.logic.not(isSameEpisode))
    );

    new ItemEditor(this.q03_symptoms_ended).addValidation({
      key: "end_after_start",
      rule: startsBeforeEnding,
      type: "hard",
    });

    new ItemEditor(this.q03_symptoms_ended).addDisplayComponent({
      role: "error",
      content: generateLocStrings(strings["ends_before_starting"]),
      displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "end_after_start")),
    });

    this.addConditionalItem(this.q03_symptoms_ended, hasSymptoms);

    this.addPageBreak();

    this.addConditionalItem(this.q05_fever_started, SurveyEngine.logic.and(hasSymptoms, hasFever));

    this.addConditionalItem(this.q05_1_temperature, SurveyEngine.logic.and(hasSymptoms, hasFever));

    this.addPageBreak();

    this.addConditionalItem(this.q06_seek_care, hasSymptoms);

    const hasSoughtCare = SurveyEngine.singleChoice.any(this.q06_seek_care.key, Q06_SeekCare.Responses.Yes.value);

    this.addConditionalItem(this.q06_1_seek_care_which, SurveyEngine.logic.and(hasSymptoms, hasSoughtCare));

    this.addConditionalItem(this.q06_2_seek_care_other, hasSymptoms);


    const hasSoughtCareOther = SurveyEngine.singleChoice.any(
      this.q06_2_seek_care_other.key,
      Q06_2_SeekCareOther.Responses.Yes.value
    );

    this.addConditionalItem(this.q06_3_seek_care_other_which, SurveyEngine.logic.and(hasSymptoms, hasSoughtCareOther));

    this.addPageBreak();

    this.addConditionalItem(this.q07_test_taken_any, hasSymptoms);

    const hasTestedInfluenza = SurveyEngine.multipleChoice.any(
      this.q07_test_taken_any.key,
      Q07_TestTakenAny.Responses.Influenza.value
    );
    const hasTestedCovid = SurveyEngine.multipleChoice.any(
      this.q07_test_taken_any.key,
      Q07_TestTakenAny.Responses.Covid.value
    );

    this.addConditionalItem(
      this.q07_1a_influenza_test_results,
      SurveyEngine.logic.and(hasSymptoms, hasTestedInfluenza)
    );

    this.addConditionalItem(this.q07_2a_influenza_test_type, SurveyEngine.logic.and(hasSymptoms, hasTestedInfluenza));

    this.addConditionalItem(this.q07_3a_influenza_test_date, SurveyEngine.logic.and(hasSymptoms, hasTestedInfluenza));

    this.addConditionalItem(this.q07_1b_covid_test_results, SurveyEngine.logic.and(hasSymptoms, hasTestedCovid));

    this.addConditionalItem(this.q07_2b_covid_test_type, SurveyEngine.logic.and(hasSymptoms, hasTestedCovid));

    this.addConditionalItem(this.q07_3b_covid_test_date, SurveyEngine.logic.and(hasSymptoms, hasTestedCovid));

    this.addPageBreak();

    this.addConditionalItem(this.q08_medication_any, hasSymptoms);

    this.addConditionalItem(this.q09_routine_change, hasSymptoms);

    this.addConditionalItem(this.q09_1_time_off, hasSymptoms);

    const hasTimeOff = SurveyEngine.singleChoice.any(this.q09_1_time_off.key, Q09_1_TimeOff.Responses.Yes.value);

    this.addConditionalItem(this.q09_2_time_off_days, SurveyEngine.logic.and(hasSymptoms, hasTimeOff));
  }
}

export const weekly = new Weekly();
