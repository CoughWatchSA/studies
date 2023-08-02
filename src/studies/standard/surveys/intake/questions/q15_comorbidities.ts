import { SurveyEngine } from "case-editor-tools/surveys";
import {
  TResponse,
  ToOptionDef,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  generateLocStrings,
} from "../../../../../common/types";

export class Q15_Comorbidities extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q15_Comorbidities.key, strings);

    this.options = {
      isRequired: false,
      responseOptions: ToOptionDef(
        this,
        [
          Q15_Comorbidities.Responses.No_Underlying_Medical_Conditions,
          Q15_Comorbidities.Responses.Chronic_Cardiac_Diseases,
          Q15_Comorbidities.Responses.Hypertension,
          Q15_Comorbidities.Responses.Chronic_Pulmonary_Disease,
          Q15_Comorbidities.Responses.Ashtma,
          Q15_Comorbidities.Responses.Tuberculosis_Pulmonary,
          Q15_Comorbidities.Responses.Tuberculosis_Extra_Pulmonary,
          Q15_Comorbidities.Responses.Chronic_Kidney_Disease,
          Q15_Comorbidities.Responses.Liver_Disease,
          Q15_Comorbidities.Responses.Chronic_Neurological_Disorder,
          Q15_Comorbidities.Responses.Malignant_Neoplasm,
          Q15_Comorbidities.Responses.Chronic_Hematologic_Disease,
          Q15_Comorbidities.Responses.Obesity,
          Q15_Comorbidities.Responses.Diabetes,
          Q15_Comorbidities.Responses.Rheumatologic_Disorder,
          Q15_Comorbidities.Responses.Dementia,
          Q15_Comorbidities.Responses.Immunosuppressive_Therapy,
          Q15_Comorbidities.Responses.Other,
        ],
        strings
      ),
      customValidations: [
        {
          key: "comorbidities_input",
          rule: SurveyEngine.logic.or(
            SurveyEngine.logic.not(
              SurveyEngine.responseHasKeysAny(this.key, "rg.mcg", Q15_Comorbidities.Responses.Other.value)
            ),
            SurveyEngine.checkResponseValueWithRegex(
              this.key,
              `rg.mcg.${Q15_Comorbidities.Responses.Other.value}`,
              "[\\s\\S]+"
            )
          ),
          type: "hard",
        },
      ],
      bottomDisplayCompoments: [
        {
          role: "error",
          content: generateLocStrings(strings[`${this.itemKey}.validation.comorbidities_input`]),
          displayCondition: SurveyEngine.logic.not(SurveyEngine.getSurveyItemValidation("this", "comorbidities_input")),
        },
      ],
    };
  }
}

export namespace Q15_Comorbidities {
  export const key = "q15_comorbidities";

  type TResponses =
    | "No_Underlying_Medical_Conditions"
    | "Chronic_Cardiac_Diseases"
    | "Hypertension"
    | "Chronic_Pulmonary_Disease"
    | "Ashtma"
    | "Tuberculosis_Pulmonary"
    | "Tuberculosis_Extra_Pulmonary"
    | "Chronic_Kidney_Disease"
    | "Liver_Disease"
    | "Chronic_Neurological_Disorder"
    | "Malignant_Neoplasm"
    | "Chronic_Hematologic_Disease"
    | "Obesity"
    | "Diabetes"
    | "Rheumatologic_Disorder"
    | "Dementia"
    | "Immunosuppressive_Therapy"
    | "Other";

  const disabledRule: { operator: "any"; valueSelectors: (() => string)[] } = {
    operator: "any",
    valueSelectors: [() => Q15_Comorbidities.Responses.No_Underlying_Medical_Conditions.value],
  };

  export const Responses: Record<TResponses, TResponse> = {
    No_Underlying_Medical_Conditions: {
      key: "no_underlying_medical_conditions",
      value: "-1",
      disabled: {
        operator: "any",
        valueSelectors: [
          () => Q15_Comorbidities.Responses.Chronic_Cardiac_Diseases.value,
          () => Q15_Comorbidities.Responses.Hypertension.value,
          () => Q15_Comorbidities.Responses.Chronic_Pulmonary_Disease.value,
          () => Q15_Comorbidities.Responses.Ashtma.value,
          () => Q15_Comorbidities.Responses.Tuberculosis_Pulmonary.value,
          () => Q15_Comorbidities.Responses.Tuberculosis_Extra_Pulmonary.value,
          () => Q15_Comorbidities.Responses.Chronic_Kidney_Disease.value,
          () => Q15_Comorbidities.Responses.Liver_Disease.value,
          () => Q15_Comorbidities.Responses.Chronic_Neurological_Disorder.value,
          () => Q15_Comorbidities.Responses.Malignant_Neoplasm.value,
          () => Q15_Comorbidities.Responses.Chronic_Hematologic_Disease.value,
          () => Q15_Comorbidities.Responses.Obesity.value,
          () => Q15_Comorbidities.Responses.Diabetes.value,
          () => Q15_Comorbidities.Responses.Rheumatologic_Disorder.value,
          () => Q15_Comorbidities.Responses.Dementia.value,
          () => Q15_Comorbidities.Responses.Immunosuppressive_Therapy.value,
          () => Q15_Comorbidities.Responses.Other.value,
        ],
      },
    },
    Chronic_Cardiac_Diseases: {
      key: "chronic_cardiac_diseases",
      value: "0",
      disabled: disabledRule,
    },
    Hypertension: {
      key: "hypertension",
      value: "1",
      disabled: disabledRule,
    },
    Chronic_Pulmonary_Disease: {
      key: "chronic_pulmonary_disease",
      value: "2",
      disabled: disabledRule,
    },
    Ashtma: {
      key: "ashtma",
      value: "3",
      disabled: disabledRule,
    },
    Tuberculosis_Pulmonary: {
      key: "tuberculosis_pulmonary",
      value: "4",
      disabled: disabledRule,
    },
    Tuberculosis_Extra_Pulmonary: {
      key: "tuberculosis_extra_pulmonary",
      value: "5",
      disabled: disabledRule,
    },
    Chronic_Kidney_Disease: {
      key: "chronic_kidney_disease",
      value: "6",
      disabled: disabledRule,
    },
    Liver_Disease: {
      key: "liver_disease",
      value: "7",
      disabled: disabledRule,
    },
    Chronic_Neurological_Disorder: {
      key: "chronic_neurological_disorder",
      value: "8",
      disabled: disabledRule,
    },
    Malignant_Neoplasm: {
      key: "malignant_neoplasm",
      value: "9",
      disabled: disabledRule,
    },
    Chronic_Hematologic_Disease: {
      key: "chronic_hematologic_disease",
      value: "10",
      disabled: disabledRule,
    },
    Obesity: {
      key: "obesity",
      value: "11",
      disabled: disabledRule,
    },
    Diabetes: {
      key: "diabetes",
      value: "12",
      disabled: disabledRule,
    },
    Rheumatologic_Disorder: {
      key: "rheumatologic_disorder",
      value: "13",
      disabled: disabledRule,
    },
    Dementia: {
      key: "dementia",
      value: "14",
      disabled: disabledRule,
    },
    Immunosuppressive_Therapy: {
      key: "immunosuppressive_therapy",
      value: "15",
      disabled: disabledRule,
    },
    Other: {
      key: "other",
      value: "99",
      role: "input",
      disabled: disabledRule,
    },
  };
}
