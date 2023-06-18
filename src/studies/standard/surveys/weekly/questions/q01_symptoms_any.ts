import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { TYesNoResponses, YesNoResponses } from "../../common";

export class Q01_SymptomsAny extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_SymptomsAny.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q01_SymptomsAny.Responses.Yes, Q01_SymptomsAny.Responses.No],
        strings
      ),
    };
  }
}

export namespace Q01_SymptomsAny {
  export const key = "q01_symptoms_any";

  type TResponses = TYesNoResponses;

  export const Responses: Record<TResponses, TResponse> = {
    ...YesNoResponses
  };
}
