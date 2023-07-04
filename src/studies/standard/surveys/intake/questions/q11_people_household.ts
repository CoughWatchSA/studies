import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q11_PeopleHousehold extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q11_PeopleHousehold.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q11_PeopleHousehold.Responses.Live_Alone,
          Q11_PeopleHousehold.Responses.Two_People,
          Q11_PeopleHousehold.Responses.Three_People,
          Q11_PeopleHousehold.Responses.Four_People,
          Q11_PeopleHousehold.Responses.Five_People,
          Q11_PeopleHousehold.Responses.Six_People,
          Q11_PeopleHousehold.Responses.Seven_People,
          Q11_PeopleHousehold.Responses.Eight_People,
          Q11_PeopleHousehold.Responses.Nine_People,
          Q11_PeopleHousehold.Responses.Ten_Or_More_People,
        ],
        strings
      ),
    };
  }
}

export namespace Q11_PeopleHousehold {
  export const key = "q11_people_household";

  type TResponses =
    | "Live_Alone"
    | "Two_People"
    | "Three_People"
    | "Four_People"
    | "Five_People"
    | "Six_People"
    | "Seven_People"
    | "Eight_People"
    | "Nine_People"
    | "Ten_Or_More_People";

  export const Responses: Record<TResponses, TResponse> = {
    Live_Alone: {
      key: "live_alone",
      value: "0",
    },
    Two_People: {
      key: "two_people",
      value: "1",
    },
    Three_People: {
      key: "three_people",
      value: "2",
    },
    Four_People: {
      key: "four_people",
      value: "3",
    },
    Five_People: {
      key: "five_people",
      value: "4",
    },
    Six_People: {
      key: "six_people",
      value: "5",
    },
    Seven_People: {
      key: "seven_people",
      value: "6",
    },
    Eight_People: {
      key: "eight_people",
      value: "7",
    },
    Nine_People: {
      key: "nine_people",
      value: "8",
    },
    Ten_Or_More_People: {
      key: "ten_or_more_people",
      value: "9",
    },
  };
}
