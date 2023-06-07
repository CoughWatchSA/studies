import {
  LanguageMap,
  TextInputQuestion,
  TextInputQuestionOptions,
} from "../../../../../common/types";

export class Q03_Postal_Code extends TextInputQuestion {
  options: TextInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q03_Postal_Code.key, strings);

    this.options = {
      isRequired: true,
      inputMaxWidth: "10em",
    };
  }
}

export namespace Q03_Postal_Code {
  export const key = "q03_postal_code";
}
