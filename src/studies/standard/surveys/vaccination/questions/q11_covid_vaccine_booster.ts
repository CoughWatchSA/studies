import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q11_CovidVaccineBooster extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q11_CovidVaccineBooster.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q11_CovidVaccineBooster.Responses.Yes, Q11_CovidVaccineBooster.Responses.No],
        strings
      ),
    };
  }
}

export namespace Q11_CovidVaccineBooster {
  export const key = "q11_covid_vaccine_booster";

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
