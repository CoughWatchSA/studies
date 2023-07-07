import {
  ToOptionDefDict,
  LanguageMap,
  TResponseWithKeys,
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
} from "../../../../../common/types";
import { DontRememberResponse } from "../constants";

export class Q05_1_Temperature extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q05_1_Temperature.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q05_1_Temperature.Responses, strings),
    };
  }
}

export namespace Q05_1_Temperature {
  export const key = "q05_1_temperature";

  const StandardResponses = DontRememberResponse;

  type TResponses = "No" | "Below37" | "Between37" | "Between375" | "Between38" | "Between39" | "Above39";
  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    No: { key: "no", value: "0" },
    Below37: { key: "below37", value: "1" },
    Between37: { key: "between37", value: "2" },
    Between375: { key: "between375", value: "3" },
    Between38: { key: "between38", value: "4" },
    Between39: { key: "between39", value: "5" },
    Above39: { key: "above39", value: "6" },
    ...StandardResponses
  };
}
