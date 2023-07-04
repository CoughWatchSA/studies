import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q12_RoomsSleeping extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q12_RoomsSleeping.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q12_RoomsSleeping.Responses.One_Bedroom,
          Q12_RoomsSleeping.Responses.Two_Bedrooms,
          Q12_RoomsSleeping.Responses.Three_Bedrooms,
          Q12_RoomsSleeping.Responses.Four_Bedrooms,
          Q12_RoomsSleeping.Responses.Five_Bedrooms,
          Q12_RoomsSleeping.Responses.Six_Or_More_Bedrooms,
        ],
        strings
      ),
    };
  }
}

export namespace Q12_RoomsSleeping {
  export const key = "q12_rooms_sleeping";

  type TResponses =
    | "One_Bedroom"
    | "Two_Bedrooms"
    | "Three_Bedrooms"
    | "Four_Bedrooms"
    | "Five_Bedrooms"
    | "Six_Or_More_Bedrooms";

  export const Responses: Record<TResponses, TResponse> = {
    One_Bedroom: {
      key: "one_bedroom",
      value: "0",
    },
    Two_Bedrooms: {
      key: "two_bedrooms",
      value: "1",
    },
    Three_Bedrooms: {
      key: "three_bedrooms",
      value: "2",
    },
    Four_Bedrooms: {
      key: "four_bedrooms",
      value: "3",
    },
    Five_Bedrooms: {
      key: "five_bedrooms",
      value: "4",
    },
    Six_Or_More_Bedrooms: {
      key: "six_or_more_bedrooms",
      value: "5",
    },
  };
}
