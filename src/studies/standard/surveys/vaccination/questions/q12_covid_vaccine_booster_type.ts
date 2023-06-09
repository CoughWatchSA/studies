import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q12_CovidVaccineBoosterType extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q12_CovidVaccineBoosterType.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q12_CovidVaccineBoosterType.Responses.Pfizer, Q12_CovidVaccineBoosterType.Responses.JohnsonJohnson],
        strings
      ),
    };
  }
}

export namespace Q12_CovidVaccineBoosterType {
  export const key = "q12_covid_vaccine_booster_type";

  type TResponses = "Pfizer" | "JohnsonJohnson";

  export const Responses: Record<TResponses, TResponse> = {
    Pfizer: {
      key: "pfizer",
      value: "0",
    },
    JohnsonJohnson: {
      key: "johnsonjohnson",
      value: "1",
    },
  };
}
