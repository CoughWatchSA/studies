import { covidVaccineDateInputProps } from "../../../../../common/constants";
import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q10_CovidVaccine_Fifth_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q10_CovidVaccine_Fifth_Dose.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q10_CovidVaccine_Fifth_Dose.Responses.Pfizer, Q10_CovidVaccine_Fifth_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q10_CovidVaccine_Fifth_Dose {
  export const key = "q10_covid_vaccine_fifth_dose";

  type TResponses = "Pfizer" | "JohnsonJohnson";

  export const Responses: Record<TResponses, TResponse> = {
    Pfizer: {
      key: "pfizer",
      value: "0",
      role: "dateInput",
      dateInputProperties: covidVaccineDateInputProps,
    },
    JohnsonJohnson: {
      key: "johnsonjohnson",
      value: "1",
      role: "dateInput",
      dateInputProperties: covidVaccineDateInputProps,
    },
  };
}
