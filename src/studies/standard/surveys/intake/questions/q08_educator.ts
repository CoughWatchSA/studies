import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q08_Educator extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q08_Educator.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q08_Educator.Responses.No, Q08_Educator.Responses.Yes], strings),
    };
  }
}

export namespace Q08_Educator {
  export const key = "q08_educator";

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
