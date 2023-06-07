import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q04_Province extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q04_Province.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q04_Province.Responses.Gauteng,
          Q04_Province.Responses.KwaZulu_Natal,
          Q04_Province.Responses.Free_State,
          Q04_Province.Responses.North_West,
          Q04_Province.Responses.Western_Cape,
          Q04_Province.Responses.Eastern_Cape,
          Q04_Province.Responses.Northern_Cape,
          Q04_Province.Responses.Limpopo,
          Q04_Province.Responses.Mpumalanga,
        ],
        strings
      ),
    };
  }
}

export namespace Q04_Province {
  export const key = "q04_province";

  type TResponses =
    | "Gauteng"
    | "KwaZulu_Natal"
    | "Free_State"
    | "North_West"
    | "Western_Cape"
    | "Eastern_Cape"
    | "Northern_Cape"
    | "Limpopo"
    | "Mpumalanga";

  export const Responses: Record<TResponses, TResponse> = {
    Gauteng: {
      key: "gauteng",
      value: "0",
    },
    KwaZulu_Natal: {
      key: "kwazulu_natal",
      value: "1",
    },
    Free_State: {
      key: "free_state",
      value: "2",
    },
    North_West: {
      key: "north_west",
      value: "3",
    },
    Western_Cape: {
      key: "western_cape",
      value: "4",
    },
    Eastern_Cape: {
      key: "eastern_cape",
      value: "5",
    },
    Northern_Cape: {
      key: "northern_cape",
      value: "6",
    },
    Limpopo: {
      key: "limpopo",
      value: "7",
    },
    Mpumalanga: {
      key: "mpumalanga",
      value: "8",
    },
  };
}
