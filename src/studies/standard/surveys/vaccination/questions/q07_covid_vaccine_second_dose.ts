import { covidVaccineDateInputProps } from "../../../../../common/constants";
import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q07_CovidVaccine_Second_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q07_CovidVaccine_Second_Dose.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q07_CovidVaccine_Second_Dose.Responses.Pfizer, Q07_CovidVaccine_Second_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q07_CovidVaccine_Second_Dose {
  export const key = "q07_covid_vaccine_second_dose";

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
