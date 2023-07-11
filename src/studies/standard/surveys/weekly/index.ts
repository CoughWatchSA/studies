import { SurveyEngine } from "case-editor-tools/surveys";
import { ItemEditor } from "case-editor-tools/surveys/survey-editor/item-editor";
import { SurveySingleItem } from "survey-engine/data_types";
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

  buildSurvey() {
    const hasOngoingSymptoms = SurveyEngine.participantFlags.hasKey(ParticipantFlags.ongoingSymptomsStart.key);
    const ongoingSymptomsStart = SurveyEngine.participantFlags.getAsNum(ParticipantFlags.ongoingSymptomsStart.key);

    const q01_symptoms_any = this.addQuestion(Q01_SymptomsAny);

    const hasSymptoms = SurveyEngine.singleChoice.any(q01_symptoms_any.key, Q01_SymptomsAny.Responses.Yes.value);

    this.addConditionalItem(
      this.q01_1_symptoms_same_episode,
      SurveyEngine.logic.and(hasSymptoms, hasOngoingSymptoms)
    );

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

    const hasDate = (item: SurveySingleItem, dateValue: string) =>
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(SurveyEngine.singleChoice.any(item.key, dateValue)),
        SurveyEngine.isDefined(helpers.responses.getValue(item))
      );

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

    new ItemEditor(this.q04_symptoms_start).addValidation({
      key: "has_date",
      rule: hasDate(this.q04_symptoms_start, Q04_SymptomsStarted.Responses.Date.value),
      type: "hard",
    });

    new ItemEditor(this.q04_symptoms_start).addDisplayComponent({
      role: "error",
      content: generateLocStrings(strings["no_date"]),
      displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "has_date")),
    });

    this.addConditionalItem(this.q03_symptoms_ended, hasSymptoms);

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

    new ItemEditor(this.q03_symptoms_ended).addValidation({
      key: "has_date",
      rule: hasDate(this.q03_symptoms_ended, Q03_SymptomsEnded.Responses.Yes.value),
      type: "hard",
    });

    new ItemEditor(this.q03_symptoms_ended).addDisplayComponent({
      role: "error",
      content: generateLocStrings(strings["no_date"]),
      displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "has_date")),
    });

    this.addPageBreak();

    const q05_fever_started = this.addQuestion(Q05_FeverStarted, SurveyEngine.logic.and(hasSymptoms, hasFever));

    const insideSymptomsSpan = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(this.q04_symptoms_start)),
        SurveyEngine.logic.not(helpers.responses.getValue(this.q03_symptoms_ended)),
        SurveyEngine.logic.not(helpers.responses.getValue(q05_fever_started)),
        SurveyEngine.logic.and(
          SurveyEngine.compare.gte(
            helpers.responses.getValue(q05_fever_started),
            helpers.responses.getValue(this.q04_symptoms_start)
          ),
          SurveyEngine.compare.lte(
            helpers.responses.getValue(q05_fever_started),
            helpers.responses.getValue(this.q03_symptoms_ended)
          )
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(isSameEpisode),
        SurveyEngine.logic.not(ongoingSymptomsStart),
        SurveyEngine.logic.not(helpers.responses.getValue(this.q03_symptoms_ended)),
        SurveyEngine.logic.not(helpers.responses.getValue(q05_fever_started)),
        SurveyEngine.logic.and(
          SurveyEngine.compare.gte(helpers.responses.getValue(q05_fever_started), ongoingSymptomsStart),
          SurveyEngine.compare.lte(
            helpers.responses.getValue(q05_fever_started),
            helpers.responses.getValue(this.q03_symptoms_ended)
          )
        )
      )
    );

    new ItemEditor(q05_fever_started).addValidation({
      key: "inside_symptoms_span",
      rule: insideSymptomsSpan,
      type: "hard",
    });

    new ItemEditor(q05_fever_started).addDisplayComponent({
      role: "error",
      content: generateLocStrings(strings["outside_symptoms_span"]),
      displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "inside_symptoms_span")),
    });

    new ItemEditor(q05_fever_started).addValidation({
      key: "has_date",
      rule: hasDate(q05_fever_started, Q05_FeverStarted.Responses.Date.value),
      type: "hard",
    });

    new ItemEditor(q05_fever_started).addDisplayComponent({
      role: "error",
      content: generateLocStrings(strings["no_date"]),
      displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "has_date")),
    });

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
