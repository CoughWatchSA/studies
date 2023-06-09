import { covidVaccineDateInputProps } from "../../../../../common/constants";
import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q08_CovidVaccine_Third_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q08_CovidVaccine_Third_Dose.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q08_CovidVaccine_Third_Dose.Responses.Pfizer, Q08_CovidVaccine_Third_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q08_CovidVaccine_Third_Dose {
  export const key = "q08_covid_vaccine_third_dose";

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
