import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q03_FluVaccinePreviousSeason extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q03_FluVaccinePreviousSeason.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q03_FluVaccinePreviousSeason.Responses.Yes,
          Q03_FluVaccinePreviousSeason.Responses.No,
        ],
        strings
      ),
    };
  }
}

export namespace Q03_FluVaccinePreviousSeason {
  export const key = "q03_flu_vaccine_previous_season";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "0",
    },
    No: {
      key: "no",
      value: "1",
    },
  };
}
