import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q04_CovidVaccine extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q04_CovidVaccine.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q04_CovidVaccine.Responses.Yes, Q04_CovidVaccine.Responses.No], strings),
    };
  }
}

export namespace Q04_CovidVaccine {
  export const key = "q04_covid_vaccine";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "0",
    },
    No: {
      key: "no",
      value: "1",
    },
  };
}
