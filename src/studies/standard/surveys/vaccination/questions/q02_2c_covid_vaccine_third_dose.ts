import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { CovidVaccineDosesResponses } from "../constants";

export class Q02_2c_CovidVaccine_Third_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_2c_CovidVaccine_Third_Dose.key, strings);

    this.options = {
      isRequired: true,
      questionSubText: strings["leave_date_blank"],
      responseOptions: ToOptionDef(
        this,
        [Q02_2c_CovidVaccine_Third_Dose.Responses.Pfizer, Q02_2c_CovidVaccine_Third_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q02_2c_CovidVaccine_Third_Dose {
  export const key = "q02_2c_covid_vaccine_third_dose";

  export const Responses = CovidVaccineDosesResponses;
}
