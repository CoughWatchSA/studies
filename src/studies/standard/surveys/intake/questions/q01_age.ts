import { SurveyEngine } from "case-editor-tools/surveys";
import {
  LanguageMap,
  NumericInputQuestion,
  NumericInputQuestionOptions,
  generateLocStrings,
} from "../../../../../common/types";
import { numericInputResponseKey, textInputResponseKey } from "../../../../../common/constants";
export class Q01_Age extends NumericInputQuestion {
  options: NumericInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_Age.key, strings);

    this.options = {
      isRequired: true,
      inputMaxWidth: "5em",
      customValidations: [
        {
          key: "minAge",
          rule: SurveyEngine.logic.or(
            SurveyEngine.logic.not(SurveyEngine.hasResponse(this.key, numericInputResponseKey)),
            SurveyEngine.compare.gte(SurveyEngine.getResponseValueAsNum(this.key, numericInputResponseKey), 0)
          ),
          type: "hard",
        },
        {
          key: "maxAge",
          rule: SurveyEngine.logic.or(
            SurveyEngine.logic.not(SurveyEngine.hasResponse(this.key, numericInputResponseKey)),
            SurveyEngine.compare.lte(SurveyEngine.getResponseValueAsNum(this.key, numericInputResponseKey), 120)
          ),
          type: "hard",
        },
      ],
      bottomDisplayCompoments: [
        {
          role: "error",
          content: generateLocStrings(strings[`${this.itemKey}.validation.age`]),
          displayCondition: SurveyEngine.logic.or(
            SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "minAge")),
            SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "maxAge"))
          ),
        },
      ],
    };
  }
}

export namespace Q01_Age {
  export const key = "q01_age";
}
