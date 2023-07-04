import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q13_Alcohol extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q13_Alcohol.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q13_Alcohol.Responses.Yes, Q13_Alcohol.Responses.No], strings),
    };
  }
}

export namespace Q13_Alcohol {
  export const key = "q13_alcohol";

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
