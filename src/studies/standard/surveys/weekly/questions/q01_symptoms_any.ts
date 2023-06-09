import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  LanguageMap,
  ToOptionDefDict,
} from "../../../../../common/types";
import { YesNoResponses } from "../constants";

export class Q01_SymptomsAny extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_SymptomsAny.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q01_SymptomsAny.Responses, strings),
    };
  }
}

export namespace Q01_SymptomsAny {
  export const key = "q01_symptoms_any";

  export const StandardResponses = YesNoResponses;
  export const Responses = StandardResponses;
}
