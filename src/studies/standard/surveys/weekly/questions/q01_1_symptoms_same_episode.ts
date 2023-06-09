import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDefDict,
  LanguageMap,
} from "../../../../../common/types";
import {YesNoResponses } from "../constants";

export class Q01_1_SymptomsSameEpisode extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_1_SymptomsSameEpisode.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(
        this,
        Q01_1_SymptomsSameEpisode.Responses,
        strings
      ),
    };
  }
}

export namespace Q01_1_SymptomsSameEpisode {
  export const key = "q01_1_symptoms_same_episode";

  export const StandardResponses = YesNoResponses;
  export const Responses = {...StandardResponses};
}
