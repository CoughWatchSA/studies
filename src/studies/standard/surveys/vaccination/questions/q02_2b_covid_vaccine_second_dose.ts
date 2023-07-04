import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { CovidVaccineDosesResponses } from "../constants";

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

  export const Responses = CovidVaccineDosesResponses;
}
