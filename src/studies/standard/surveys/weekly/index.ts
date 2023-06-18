import { SurveyEngine } from "case-editor-tools/surveys";
import { SurveyItem } from "survey-engine/data_types";
import { Survey } from "../../../../common/types";
import { ParticipantFlags } from "../../participantFalgs";
import { strings } from "./data/strings";
import { Q01_SymptomsAny } from "./questions/q01_symptoms_any";
import { Q02_SymptomsSameEpisode } from "./questions/q02_symptoms_same_episode";
import { Q03_SymptomsEnded } from "./questions/q03_symptoms_ended";

class Weekly extends Survey {
  static surveyKey = "weekly";

  q01_symptoms_any: SurveyItem;
  q02_symptoms_same_episode: SurveyItem;
  q03_symptoms_ended: SurveyItem;

  constructor() {
    super(Weekly.surveyKey, strings);

    this.q01_symptoms_any = this.buildQuestion(Q01_SymptomsAny);

    this.q02_symptoms_same_episode = this.buildQuestion(Q02_SymptomsSameEpisode);

    this.q03_symptoms_ended = this.buildQuestion(Q03_SymptomsEnded);
  }

  buildSurvey() {

    this.addItem(this.q01_symptoms_any);

    this.q02_symptoms_same_episode.condition =
      SurveyEngine.participantFlags.hasKeyAndValue(
        ParticipantFlags.hasOnGoingSymptoms.key,
        ParticipantFlags.hasOnGoingSymptoms.values.yes
      );

    this.addItem(this.q02_symptoms_same_episode);

    this.addItem(this.q03_symptoms_ended);
  }
}

export const weekly = new Weekly();