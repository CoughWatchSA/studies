import { SurveyEngine } from "case-editor-tools/surveys";
import {
  ToOptionDefDict,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  TResponseWithKeys,
  generateLocStrings,
} from "../../../../../common/types";
import { DontRememberResponse } from "../constants";
import { strings } from "../data/strings";

export class Q08_MedicationAny extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q08_MedicationAny.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q08_MedicationAny.Responses, strings),
      customValidations: [
        {
          key: "other_not_filled",
          rule: SurveyEngine.logic.or(
            SurveyEngine.logic.not(
              SurveyEngine.responseHasKeysAny(this.key, "rg.mcg", Q08_MedicationAny.Responses.Other.value)
            ),
            SurveyEngine.checkResponseValueWithRegex(
              this.key,
              `rg.mcg.${Q08_MedicationAny.Responses.Other.value}`,
              "[\\s\\S]+"
            )
          ),
          type: "hard",
        },
      ],
      bottomDisplayCompoments: [
        {
          role: "error",
          content: generateLocStrings(strings["input_not_filled"]),
          displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "other_not_filled")),
        },
      ],
    };
  }
}

export namespace Q08_MedicationAny {
  export const key = "q08_medication_any";

  export const StandardResponses = DontRememberResponse;

  type TResponses =
    | "NoMedication"
    | "PainKillers"
    | "CoughMedication"
    | "Antivirals"
    | "Antibiotics"
    | "TraditionalMedicine"
    | "HomeRemedies"
    | "Other";

  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    NoMedication: {
      key: "no_medication",
      value: "0",
      disabled: {
        operator: "none",
        valueSelectors: [() => Q08_MedicationAny.Responses.NoMedication.value],
      },
    },
    PainKillers: {
      key: "pain_killers",
      value: "1",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    CoughMedication: {
      key: "cough_medication",
      value: "2",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    Antivirals: {
      key: "antivirals",
      value: "3",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    Antibiotics: {
      key: "antibiotics",
      value: "4",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    TraditionalMedicine: {
      key: "traditional_medicine",
      value: "5",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    HomeRemedies: {
      key: "home_remedies",
      value: "6",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    Other: {
      key: "other",
      value: "8",
      role: "input",
      placeholderText: strings["please_specify"],
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q08_MedicationAny.Responses.NoMedication.value,
          () => Q08_MedicationAny.StandardResponses.DontRemember.value,
        ],
      },
    },
    // FIXME: this is ugly and simply fools type checking
    ...{
      DontRemember: {
        ...StandardResponses.DontRemember,
        disabled: {
          operator: "none",
          valueSelectors: [() => Q08_MedicationAny.StandardResponses.DontRemember.value],
        },
      },
    },
  };
}
