import { SurveyEngine } from "case-editor-tools/surveys";
import {
  ToOptionDefDict,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  TResponseWithKeys,
  generateLocStrings,
} from "../../../../../common/types";
import { strings } from "../data/strings";

export class Q06_3_SeekCareOtherWhich extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q06_3_SeekCareOtherWhich.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q06_3_SeekCareOtherWhich.Responses, strings),
      customValidations: [
        {
          key: "other_not_filled",
          rule: SurveyEngine.logic.or(
            SurveyEngine.logic.not(
              SurveyEngine.multipleChoice.any(this.key, Q06_3_SeekCareOtherWhich.Responses.Other.value)
            ),
            SurveyEngine.checkResponseValueWithRegex(
              this.key,
              `rg.mcg.${Q06_3_SeekCareOtherWhich.Responses.Other.value}`,
              "[\\s\\S]+"
            )
          ),
          type: "hard",
        },
      ],
      bottomDisplayCompoments: [
        {
          role: "error",
          content: generateLocStrings(strings["input_not_filled"]),
          displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "other_not_filled")),
        },
      ],
    };
  }
}

export namespace Q06_3_SeekCareOtherWhich {
  export const key = "q06_3_seek_care_other_which";

  type TResponses = "GoogleSearch" | "HomeRemedies" | "TraditionalHealer" | "Other";

  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    GoogleSearch: { key: "google_search", value: "0" },
    HomeRemedies: { key: "home_remedies", value: "1" },
    TraditionalHealer: { key: "traditional_healer", value: "2" },
    Other: {
      key: "other",
      value: "3",
      role: "input",
      placeholderText: strings["please_specify"],
    },
  };
}
