import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q07_HealthCareWorker extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q07_HealthCareWorker.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q07_HealthCareWorker.Responses.Yes, Q07_HealthCareWorker.Responses.No],
        strings
      ),
    };
  }
}

export namespace Q07_HealthCareWorker {
  export const key = "q07_health_care_worker";

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
