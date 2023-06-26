import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  ToOptionDefDict,
  LanguageMap,
  TResponseWithKeys,
} from "../../../../../common/types";
import { strings } from "../data/strings";

export class Q03_SymptomsEnded extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q03_SymptomsEnded.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(
        this,
        Q03_SymptomsEnded.Responses,
        strings
      ),
    };
  }
}

export namespace Q03_SymptomsEnded {
  export const key = "q03_symptoms_ended";

  type TResponses = "Yes" | "Ongoing";

  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    Yes: {
      key: "yes",
      value: "0",
      role: "dateInput",
      dateInputMode: "YMD",
      placeholderText: strings["date_placeholder_ymd"],
      maxRelativeDate: {
        delta: { days: 0 },
      },
      minRelativeDate: {
        delta: { days: -7 },
      },
    },
    Ongoing: {
      value: "1",
      key: "ongoing"
    },
  };
}
