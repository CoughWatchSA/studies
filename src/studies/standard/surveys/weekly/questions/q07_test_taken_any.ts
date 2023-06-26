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

  type TResponses = "Influenza" | "Covid";

  export const Responses: Record<TResponses, TResponse> = {
    Influenza: {
      key: "influenza",
      value: "0",
    },
    Covid: {
      key: "covid",
      value: "1",
    }
  };
}
