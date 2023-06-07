import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q18_HealthcareSector extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q18_HealthcareSector.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q18_HealthcareSector.Responses.Private,
          Q18_HealthcareSector.Responses.Public,
          Q18_HealthcareSector.Responses.Both,
        ],
        strings
      ),
    };
  }
}

export namespace Q18_HealthcareSector {
  export const key = "q18_healthcare_sector";

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
