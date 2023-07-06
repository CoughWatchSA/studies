import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q06_Employment extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q06_Employment.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q06_Employment.Responses.No, Q06_Employment.Responses.Yes], strings),
    };
  }
}

export namespace Q06_Employment {
  export const key = "q06_employment";

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
