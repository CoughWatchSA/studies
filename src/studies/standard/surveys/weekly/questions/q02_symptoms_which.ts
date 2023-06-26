import {
  ToOptionDefDict,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  TResponseWithKeys,
} from "../../../../../common/types";
import { strings } from "../data/strings";

export class Q02_SymptomsWhich extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_SymptomsWhich.key, strings);

    this.options = {
      isRequired: false,
      responseOptions: ToOptionDefDict(this, Q02_SymptomsWhich.Responses, strings),
    };
  }
}

export namespace Q02_SymptomsWhich {
  export const key = "q02_symptoms_which";

  type TResponses =
    | "Fever"
    | "Chills"
    | "RunningNose"
    | "Sneezing"
    | "SoreThroat"
    | "Cough"
    | "ShortnessBreath"
    | "Headache"
    | "MusclePain"
    | "ChestPain"
    | "FeelingTired"
    | "LossAppetite"
    | "ColoredSputum"
    | "BloodshotEyes"
    | "Nausea"
    | "Vomiting"
    | "Diarrhea"
    | "StomachAche"
    | "LossSmell"
    | "LossTaste"
    | "NoseBleed"
    | "Other";

  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    Fever: { key: "fever", value: "0" },
    Chills: { key: "chills", value: "1" },
    RunningNose: { key: "running_nose", value: "2" },
    Sneezing: { key: "sneezing", value: "3" },
    SoreThroat: { key: "sore_throat", value: "4" },
    Cough: { key: "cough", value: "5" },
    ShortnessBreath: { key: "shortness_breath", value: "6" },
    Headache: { key: "headache", value: "7" },
    MusclePain: { key: "muscle_pain", value: "8" },
    ChestPain: { key: "chest_pain", value: "9" },
    FeelingTired: { key: "feeling_tired", value: "10" },
    LossAppetite: { key: "loss_appetite", value: "11" },
    ColoredSputum: { key: "colored_sputum", value: "12" },
    BloodshotEyes: { key: "bloodshot_eyes", value: "13" },
    Nausea: { key: "nausea", value: "14" },
    Vomiting: { key: "vomiting", value: "15" },
    Diarrhea: { key: "diarrhea", value: "16" },
    StomachAche: { key: "stomach_ache", value: "17" },
    LossSmell: { key: "loss_smell", value: "18" },
    LossTaste: { key: "loss_taste", value: "19" },
    NoseBleed: { key: "nose_bleed", value: "20" },
    // TODO: type comon answer other
    Other: {
      key: "other",
      value: "99",
      role: "input",
      placeholderText: strings["please_specify"],
    },
  };
}
