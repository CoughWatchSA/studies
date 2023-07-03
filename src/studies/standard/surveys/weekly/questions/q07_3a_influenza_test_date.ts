import { LanguageMap, DateInputQuestion, DateInputQuestionOptions } from "../../../../../common/types";
import { illnessTestDateOptions } from "../constants";

export class Q07_3a_InfluenzaTestDate extends DateInputQuestion {
  options: DateInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q07_3a_InfluenzaTestDate.key, strings);

    this.options = {
      isRequired: false,
    ...illnessTestDateOptions
    };
  }
}

export namespace Q07_3a_InfluenzaTestDate {
  export const key = "q07_3a_influenza_test_date";
}