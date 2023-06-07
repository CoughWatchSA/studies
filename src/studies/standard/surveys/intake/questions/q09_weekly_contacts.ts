import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q09_WeeklyContacts extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q09_WeeklyContacts.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q09_WeeklyContacts.Responses.Less_Than_Five_People,
          Q09_WeeklyContacts.Responses.Six_To_Ten_People,
          Q09_WeeklyContacts.Responses.More_Than_Ten_People,
          Q09_WeeklyContacts.Responses.None,
        ],
        strings
      ),
    };
  }
}

export namespace Q09_WeeklyContacts {
  export const key = "q09_weekly_contacts";

  type TResponses =
    | "Less_Than_Five_People"
    | "Six_To_Ten_People"
    | "More_Than_Ten_People"
    | "None";

  export const Responses: Record<TResponses, TResponse> = {
    Less_Than_Five_People: {
      key: "less_than_five_people",
      value: "0",
    },
    Six_To_Ten_People: {
      key: "six_to_ten_people",
      value: "1",
    },
    More_Than_Ten_People: {
      key: "more_than_ten_people",
      value: "2",
    },
    None: {
      key: "none",
      value: "3",
    },
  };
}
