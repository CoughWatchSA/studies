import { LanguageMap, SingleChoiceQuestion, SingleChoiceQuestionOptions, ToOptionDefDict, TResponseWithKeys } from "../../../../../common/types";
import { DontRememberResponse, illnessTestDateOptions } from "../constants";

export class Q07_3b_CovidTestDate extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q07_3b_CovidTestDate.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q07_3b_CovidTestDate.Responses, strings),
    };
  }
}

export namespace Q07_3b_CovidTestDate {

  export const key = "q07_3b_covid_test_date";

  const StandardResponses = DontRememberResponse;

  type TResponses = "Date";
  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    Date: {
      key: "date",
      value: "0",
      ...illnessTestDateOptions,
    },
    ...StandardResponses
  };
}