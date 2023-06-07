import {
  LanguageMap,
  NumericInputQuestion,
  NumericInputQuestionOptions,
} from "../../../../../common/types";

export class Q01_Age extends NumericInputQuestion {
  options: NumericInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_Age.key, strings);

    this.options = {
      isRequired: true,
      inputMaxWidth: "5em",
    };
  }
}

export namespace Q01_Age {
  export const key = "q01_age";
}
