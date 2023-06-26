import {
  ToOptionDefDict,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  TResponseWithKeys,
} from "../../../../../common/types";
import { strings } from "../data/strings";

export class Q06_3_SeekCareOtherWhich extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q06_3_SeekCareOtherWhich.key, strings);

    this.options = {
      isRequired: false,
      responseOptions: ToOptionDefDict(this, Q06_3_SeekCareOtherWhich.Responses, strings),
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
