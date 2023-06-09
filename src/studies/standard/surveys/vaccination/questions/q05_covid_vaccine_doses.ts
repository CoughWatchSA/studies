import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q05_CovidVaccineDoses extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q05_CovidVaccineDoses.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q05_CovidVaccineDoses.Responses.OneDose,
          Q05_CovidVaccineDoses.Responses.TwoDoses,
          Q05_CovidVaccineDoses.Responses.ThreeDoses,
          Q05_CovidVaccineDoses.Responses.FourDoses,
          Q05_CovidVaccineDoses.Responses.FiveDoses,
        ],
        strings
      ),
    };
  }
}

export namespace Q05_CovidVaccineDoses {
  export const key = "q05_covid_vaccine_doses";

  type TResponses = "OneDose" | "TwoDoses" | "ThreeDoses" | "FourDoses" | "FiveDoses";

  export const Responses: Record<TResponses, TResponse> = {
    OneDose: {
      key: "one_dose",
      value: "0",
    },
    TwoDoses: {
      key: "two_doses",
      value: "1",
    },
    ThreeDoses: {
      key: "three_doses",
      value: "3",
    },
    FourDoses: {
      key: "four_doses",
      value: "4",
    },
    FiveDoses: {
      key: "five_doses",
      value: "5",
    },
  };
}
