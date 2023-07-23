import { DateInputQuestion, DateInputQuestionOptions, LanguageMap } from "../../../../../common/types";
import { DateOptions } from "../constants";

export class Q05_FeverStarted extends DateInputQuestion {
  options: DateInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q05_FeverStarted.key, strings);

    this.options = {
      isRequired: true,
      dateInputMode: "YMD",
      placeholderText: strings["date_placeholder_ymd"],
      maxRelativeDate: {
        delta: { years: 0 },
      },
      minRelativeDate: {
        delta: { days: -DateOptions.maxOnsetDays },
      },
    };

  }
}

export namespace Q05_FeverStarted {
  export const key = "q05_fever_started";
}
