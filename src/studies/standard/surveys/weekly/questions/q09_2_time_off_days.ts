import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDefDict,
  LanguageMap,
} from "../../../../../common/types";

export class Q09_2_TimeOffDays extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q09_2_TimeOffDays.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q09_2_TimeOffDays.Responses, strings),
    };
  }
}

export namespace Q09_2_TimeOffDays {
  export const key = "q09_2_time_off_days";

  type TResponses = "One" | "Two" | "Three" | "FourMore";

  export const Responses: Record<TResponses, TResponse> = {
    One: {
      key: "one",
      value: "0",
    },
    Two: {
      key: "two",
      value: "1",
    },
    Three: {
      key: "three",
      value: "2",
    },
    FourMore: {
      key: "four_more",
      value: "3",
    },
  };
}
