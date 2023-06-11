import { SurveyEngine } from "case-editor-tools/surveys";
import {
  LanguageMap,
  TextInputQuestion,
  TextInputQuestionOptions,
  generateLocStrings,
} from "../../../../../common/types";
import { textInputResponseKey } from "../../../../../common/constants";

export class Q03_Postal_Code extends TextInputQuestion {
  options: TextInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q03_Postal_Code.key, strings);

    this.options = {
      isRequired: true,
      inputMaxWidth: "10em",
      customValidations: [
        {
          key: "postal_code",
          rule: SurveyEngine.checkResponseValueWithRegex(this.key, textInputResponseKey, "^\\d{4}$"),
          type: "hard",
        },
      ],
      bottomDisplayCompoments: [
        {
          role: "error",
          content: generateLocStrings(strings[`${this.itemKey}.validation.postal_code`]),
          displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "postal_code")),
        },
      ],
    };
  }
}

export namespace Q03_Postal_Code {
  export const key = "q03_postal_code";
}
