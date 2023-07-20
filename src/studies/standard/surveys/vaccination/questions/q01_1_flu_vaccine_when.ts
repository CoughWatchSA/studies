import { LanguageMap, DateInputQuestion, DateInputQuestionOptions } from "../../../../../common/types";

export class Q01_1_FluVaccineWhen extends DateInputQuestion {
  options: DateInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_1_FluVaccineWhen.key, strings);

    this.options = {
      isRequired: false,
      questionSubText: strings[`${Q01_1_FluVaccineWhen.key}.questionSubText`],
      placeholderText: strings["dateInput_year"],
      dateInputMode: "YM",
      maxRelativeDate: {
        delta: { years: 0 },
      },
      minRelativeDate: {
        delta: { years: 0 },
      },
    };
  }
}

export namespace Q01_1_FluVaccineWhen {
  export const key = "q01_1_flu_vaccine_when";
}
