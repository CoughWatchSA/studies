import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q16_HealthcareSector extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q16_HealthcareSector.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q16_HealthcareSector.Responses.Private,
          Q16_HealthcareSector.Responses.Public,
          Q16_HealthcareSector.Responses.Both,
        ],
        strings
      ),
    };
  }
}

export namespace Q16_HealthcareSector {
  export const key = "q16_healthcare_sector";

  type TResponses = "Private" | "Public" | "Both";

  export const Responses: Record<TResponses, TResponse> = {
    Private: {
      key: "private",
      value: "0",
    },
    Public: {
      key: "public",
      value: "1",
    },
    Both: {
      key: "both",
      value: "2",
    },
  };
}
