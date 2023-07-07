import { LanguageMap, SingleChoiceQuestionOptions, TResponseWithKeys, ToOptionDefDict, SingleChoiceQuestion } from "../../../../../common/types";
import { DateOptions, DontRememberResponse } from "../constants";
import { strings } from "../data/strings";

export class Q04_SymptomsStarted extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q04_SymptomsStarted.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(
        this,
        Q04_SymptomsStarted.Responses,
        strings
      ),
    };
  }
}

export namespace Q04_SymptomsStarted {
  export const key = "q04_symptoms_started";

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
    ...StandardResponses
  };
}
