import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { covidVaccineDateInputProps } from "../constants";

export class Q02_2b_CovidVaccine_Second_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_2b_CovidVaccine_Second_Dose.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q02_2b_CovidVaccine_Second_Dose.Responses.Pfizer, Q02_2b_CovidVaccine_Second_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q02_2b_CovidVaccine_Second_Dose {
  export const key = "q02_2b_covid_vaccine_second_dose";

  type TResponses = "Pfizer" | "JohnsonJohnson";

  export const Responses: Record<TResponses, TResponse> = {
    Pfizer: {
      key: "pfizer",
      value: "0",
      role: "dateInput_old",
      dateInputProperties: covidVaccineDateInputProps,
    },
    JohnsonJohnson: {
      key: "johnsonjohnson",
      value: "1",
      role: "dateInput_old",
      dateInputProperties: covidVaccineDateInputProps,
    },
  };
}
