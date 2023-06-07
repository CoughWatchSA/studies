import {
  LanguageMap,
  NumericInputQuestion,
  NumericInputQuestionOptions,
} from "../../../../../common/types";

export class Numeric extends NumericInputQuestion {
  options: NumericInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Numeric.key, strings);

    this.options = {
      isRequired: true,
    };
  }
}

export namespace Numeric {
  export const key = "q02_numeric";
}
