import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q14_Tobacco extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q14_Tobacco.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q14_Tobacco.Responses.No, Q14_Tobacco.Responses.Yes], strings),
    };
  }
}

export namespace Q14_Tobacco {
  export const key = "q14_tobacco";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "1",
    },
    No: {
      key: "no",
      value: "0",
    },
  };
}
