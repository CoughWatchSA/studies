import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { CovidVaccineDosesResponses } from "../constants";

export class Q02_2a_CovidVaccine_First_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_2a_CovidVaccine_First_Dose.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q02_2a_CovidVaccine_First_Dose.Responses.Pfizer, Q02_2a_CovidVaccine_First_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q02_2a_CovidVaccine_First_Dose {
  export const key = "q02_2a_covid_vaccine_first_dose";

  export const Responses = CovidVaccineDosesResponses;
}
