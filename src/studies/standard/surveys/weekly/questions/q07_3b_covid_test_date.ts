import { DateInputQuestion, DateInputQuestionOptions, LanguageMap } from "../../../../../common/types";
import { illnessTestDateOptions } from "../constants";

export class Q07_3b_CovidTestDate extends DateInputQuestion {
  options: DateInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q07_3b_CovidTestDate.key, strings);

    this.options = {
      isRequired: true,
      ...illnessTestDateOptions,
    };
  }
}

export namespace Q07_3b_CovidTestDate {

  export const key = "q07_3b_covid_test_date";

}