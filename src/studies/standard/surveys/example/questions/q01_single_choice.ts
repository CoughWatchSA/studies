import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class SingleChoice extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, SingleChoice.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          SingleChoice.Responses.Zero,
          SingleChoice.Responses.One,
          SingleChoice.Responses.Two,
          SingleChoice.Responses.Three,
          SingleChoice.Responses.FourOrMore,
          SingleChoice.Responses.OpenQuestion,
        ],
        strings
      ),
    };
  }
}

export namespace SingleChoice {
  export const key = "q01_single_choice";

  type TResponses =
    | "Zero"
    | "One"
    | "Two"
    | "Three"
    | "FourOrMore"
    | "OpenQuestion";

  export const Responses: Record<TResponses, TResponse> = {
    Zero: {
      key: "zero",
      value: "0",
    },
    One: {
      key: "one",
      value: "1",
    },
    Two: {
      key: "two",
      value: "2",
    },
    Three: {
      key: "three",
      value: "3",
    },
    FourOrMore: {
      key: "four_or_more",
      value: "4",
    },
    OpenQuestion: {
      key: "open_question",
      value: "5",
      role: "input",
    },
  };
}
