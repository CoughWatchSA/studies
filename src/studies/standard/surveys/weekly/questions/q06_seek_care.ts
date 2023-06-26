import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDefDict,
  LanguageMap,
} from "../../../../../common/types";

import { YesNoResponses } from "../constants";

export class Q06_SeekCare extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q06_SeekCare.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q06_SeekCare.Responses, strings),
    };
  }
}

export namespace Q06_SeekCare {
  export const key = "q06_seek_care";

  export const StandardResponses = YesNoResponses;
  export const Responses = StandardResponses;
}