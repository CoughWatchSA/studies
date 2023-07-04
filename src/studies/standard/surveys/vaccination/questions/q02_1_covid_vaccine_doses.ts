import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q02_1_CovidVaccineDoses extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_1_CovidVaccineDoses.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q02_1_CovidVaccineDoses.Responses.OneDose,
          Q02_1_CovidVaccineDoses.Responses.TwoDoses,
          Q02_1_CovidVaccineDoses.Responses.ThreeDoses,
          Q02_1_CovidVaccineDoses.Responses.FourDoses,
          Q02_1_CovidVaccineDoses.Responses.FiveDoses,
        ],
        strings
      ),
    };
  }
}

export namespace Q02_1_CovidVaccineDoses {
  export const key = "q02_1_covid_vaccine_doses";

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
