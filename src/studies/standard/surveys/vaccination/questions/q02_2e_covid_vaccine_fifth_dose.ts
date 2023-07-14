import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";
import { CovidVaccineDosesResponses } from "../constants";

export class Q02_2e_CovidVaccine_Fifth_Dose extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_2e_CovidVaccine_Fifth_Dose.key, strings);

    this.options = {
      isRequired: true,
      questionSubText: strings["leave_date_blank"],
      responseOptions: ToOptionDef(
        this,
        [Q02_2e_CovidVaccine_Fifth_Dose.Responses.Pfizer, Q02_2e_CovidVaccine_Fifth_Dose.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q02_2e_CovidVaccine_Fifth_Dose {
  export const key = "q02_2e_covid_vaccine_fifth_dose";

  export const Responses = CovidVaccineDosesResponses;
}
