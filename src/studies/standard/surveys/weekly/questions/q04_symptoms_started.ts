import { LanguageMap, DateInputQuestion, DateInputQuestionOptions } from "../../../../../common/types";
import { DateOptions } from "../constants";

export class Q04_SymptomsStarted extends DateInputQuestion {
  options: DateInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q04_SymptomsStarted.key, strings);

    this.options = {
      isRequired: true,
      dateInputMode: "YMD",
      placeholderText: strings["date_placeholder_ymd"],
      maxRelativeDate: {
        delta: { days: 0 },
      },
      minRelativeDate: {
        delta: { days: -DateOptions.maxOnsetDays },
      },
    };
  }
}

export namespace Q04_SymptomsStarted {
  export const key = "q04_symptoms_started";
}
