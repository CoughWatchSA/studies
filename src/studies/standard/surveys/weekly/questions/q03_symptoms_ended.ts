import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q03_SymptomsEnded extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q03_SymptomsEnded.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q03_SymptomsEnded.Responses.Yes, Q03_SymptomsEnded.Responses.Ongoing],
        strings
      ),
    };
  }
}

export namespace Q03_SymptomsEnded {
  export const key = "q03_symptoms_ended";

  type TResponses = "Yes" | "Ongoing";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "0",
      role: "dateInput",
      dateInputProperties: {
        key: "date",
        dateInputMode: "YMD",
        maxRelativeDate: {
          delta: { days: 0 },
        },
        minRelativeDate: {
          delta: { days: -7 },
        },
      },
    },
    Ongoing: {
      key: "ongoing",
      value: "0",
    },
  };
}
