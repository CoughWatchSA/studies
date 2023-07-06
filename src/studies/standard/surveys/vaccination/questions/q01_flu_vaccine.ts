import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q01_FluVaccine extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q01_FluVaccine.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(this, [Q01_FluVaccine.Responses.No, Q01_FluVaccine.Responses.Yes], strings),
    };
  }
}

export namespace Q01_FluVaccine {
  export const key = "q01_flu_vaccine";

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
