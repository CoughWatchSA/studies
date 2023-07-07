import {
  MultipleChoiceQuestionOptions,
  MultipleChoiceQuestion,
  TResponse,
  ToOptionDefDict,
  LanguageMap,
} from "../../../../../common/types";

export class Q07_TestTakenAny extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q07_TestTakenAny.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q07_TestTakenAny.Responses, strings),
    };
  }
}

export namespace Q07_TestTakenAny {
  export const key = "q07_test_taken_any";

  type TResponses = "Influenza" | "Covid" | "None";

  export const Responses: Record<TResponses, TResponse> = {
    Influenza: {
      key: "influenza",
      value: "0",
      disabled: {
        operator: "any",
        valueSelectors: [() => Q07_TestTakenAny.Responses.None.value],
      },
    },
    Covid: {
      key: "covid",
      value: "1",
      disabled: {
        operator: "any",
        valueSelectors: [() => Q07_TestTakenAny.Responses.None.value],
      },
    },
    None: {
      key: "none",
      value: "2",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q07_TestTakenAny.Responses.Influenza.value,
          () => Q07_TestTakenAny.Responses.Covid.value,
        ],
      },
    },
  };
}
