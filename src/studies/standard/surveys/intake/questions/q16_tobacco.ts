import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q16_Tobacco extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q16_Tobacco.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q16_Tobacco.Responses.Yes, Q16_Tobacco.Responses.No],
        strings
      ),
    };
  }
}

export namespace Q16_Tobacco {
  export const key = "q16_tobacco";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "0",
    },
    No: {
      key: "no",
      value: "1",
    },
  };
}
