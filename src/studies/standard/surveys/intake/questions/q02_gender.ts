import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q02_Gender extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_Gender.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q02_Gender.Responses.Man,
          Q02_Gender.Responses.Woman,
          Q02_Gender.Responses.Prefer_not_to_say,
          Q02_Gender.Responses.Prefer_to_self_describe,
        ],
        strings
      ),
    };
  }
}

export namespace Q02_Gender {
  export const key = "q02_gender";

  type TResponses =
    | "Man"
    | "Woman"
    | "Prefer_not_to_say"
    | "Prefer_to_self_describe";

  export const Responses: Record<TResponses, TResponse> = {
    Man: {
      key: "man",
      value: "0",
    },
    Woman: {
      key: "woman",
      value: "1",
    },
    Prefer_not_to_say: {
      key: "prefer_not_to_say",
      value: "2",
    },
    Prefer_to_self_describe: {
      key: "prefer_to_self_describe",
      value: "3",
      role: "input",
    },
  };
}
