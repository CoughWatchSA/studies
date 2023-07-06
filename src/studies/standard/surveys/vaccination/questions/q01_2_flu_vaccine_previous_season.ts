import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q01_2_FluVaccinePreviousSeason extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_2_FluVaccinePreviousSeason.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q01_2_FluVaccinePreviousSeason.Responses.No, Q01_2_FluVaccinePreviousSeason.Responses.Yes],
        strings
      ),
    };
  }
}

export namespace Q01_2_FluVaccinePreviousSeason {
  export const key = "q01_2_flu_vaccine_previous_season";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "1",
    },
    No: {
      key: "no",
      value: "0",
    },
  };
}
