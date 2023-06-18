import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { TYesNoResponses, YesNoResponses } from "../../common";

export class Q02_SymptomsSameEpisode extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_SymptomsSameEpisode.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q02_SymptomsSameEpisode.Responses.Yes, Q02_SymptomsSameEpisode.Responses.No],
        strings
      ),
    };
  }
}

export namespace Q02_SymptomsSameEpisode {
  export const key = "q02_symptoms_same_episode";

  type TResponses = TYesNoResponses

  export const Responses: Record<TResponses, TResponse> = {
    ...YesNoResponses
  };
}
