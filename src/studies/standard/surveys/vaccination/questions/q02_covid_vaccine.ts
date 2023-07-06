import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q02_CovidVaccine extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_CovidVaccine.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q02_CovidVaccine.Responses.No, Q02_CovidVaccine.Responses.Yes], strings),
    };
  }
}

export namespace Q02_CovidVaccine {
  export const key = "q02_covid_vaccine";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "1",
    },
    No: {
      key: "no",
      value: "0",
    },
  };
}
