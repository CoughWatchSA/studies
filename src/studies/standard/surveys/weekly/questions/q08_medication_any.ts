import {
  ToOptionDefDict,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  TResponseWithKeys,
} from "../../../../../common/types";
import { strings } from "../data/strings";

export class Q08_MedicationAny extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q08_MedicationAny.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q08_MedicationAny.Responses, strings),
    };
  }
}

export namespace Q08_MedicationAny {
  export const key = "q08_medication_any";

  type TResponses =
    | "NoMedication"
    | "PainKillers"
    | "CoughMedication"
    | "Antivirals"
    | "Antibiotics"
    | "TraditionalMedicine"
    | "HomeRemedies"
    | "DontKnow"
    | "Other";

  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    NoMedication: { key: "no_medication", value: "0" },
    PainKillers: { key: "pain_killers", value: "1" },
    CoughMedication: { key: "cough_medication", value: "2" },
    Antivirals: { key: "antivirals", value: "3" },
    Antibiotics: { key: "antibiotics", value: "4" },
    TraditionalMedicine: { key: "traditional_medicine", value: "5" },
    HomeRemedies: { key: "home_remedies", value: "6" },
    // FIXME: decide common values for DontKnow and Other
    // FIXME: add type checks for duplicated keys / values
    DontKnow: { key: "dont_know", value: "7" },
    Other: {
      key: "other",
      value: "8",
      role: "input",
      placeholderText: strings["please_specify"],
    },
  };
}
