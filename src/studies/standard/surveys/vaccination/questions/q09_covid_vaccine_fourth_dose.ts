import { covidVaccineDateInputProps } from "../../../../../common/constants";
import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q09_CovidVaccine_Fourth_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q09_CovidVaccine_Fourth_Dose.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q09_CovidVaccine_Fourth_Dose.Responses.Pfizer, Q09_CovidVaccine_Fourth_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q09_CovidVaccine_Fourth_Dose {
  export const key = "q09_covid_vaccine_fourth_dose";

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
