import { LanguageMap, SingleChoiceQuestion, SingleChoiceQuestionOptions, ToOptionDefDict, TResponseWithKeys } from "../../../../../common/types";
import { DateOptions, DontRememberResponse } from "../constants";
import { strings } from "../data/strings";

export class Q05_FeverStarted extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q05_FeverStarted.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(
        this,
        Q05_FeverStarted.Responses,
        strings
      ),
    };

  }
}

export namespace Q05_FeverStarted {
  export const key = "q05_fever_started";

  const StandardResponses = DontRememberResponse;

  type TResponses = "Date";
  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    Date: {
      key: "date",
      value: "0",
      role: "dateInput",
      dateInputMode: "YMD",
      placeholderText: strings["date_placeholder_ymd"],
      maxRelativeDate: {
        delta: { years: 0 },
      },
      minRelativeDate: {
        delta: { days: -DateOptions.maxOnsetDays },
      },
    },
    ...StandardResponses,
  };
}
