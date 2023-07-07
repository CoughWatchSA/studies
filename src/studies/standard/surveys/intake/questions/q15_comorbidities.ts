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

  export const Responses: Record<TResponses, TResponse> = {
    Chronic_Cardiac_Diseases: {
      key: "chronic_cardiac_diseases",
      value: "0",
    },
    Hypertension: {
      key: "hypertension",
      value: "1",
    },
    Chronic_Pulmonary_Disease: {
      key: "chronic_pulmonary_disease",
      value: "2",
    },
    Ashtma: {
      key: "ashtma",
      value: "3",
    },
    Tuberculosis_Pulmonary: {
      key: "tuberculosis_pulmonary",
      value: "4",
    },
    Tuberculosis_Extra_Pulmonary: {
      key: "tuberculosis_extra_pulmonary",
      value: "5",
    },
    Chronic_Kidney_Disease: {
      key: "chronic_kidney_disease",
      value: "6",
    },
    Liver_Disease: {
      key: "liver_disease",
      value: "7",
    },
    Chronic_Neurological_Disorder: {
      key: "chronic_neurological_disorder",
      value: "8",
    },
    Malignant_Neoplasm: {
      key: "malignant_neoplasm",
      value: "9",
    },
    Chronic_Hematologic_Disease: {
      key: "chronic_hematologic_disease",
      value: "10",
    },
    Obesity: {
      key: "obesity",
      value: "11",
    },
    Diabetes: {
      key: "diabetes",
      value: "12",
    },
    Rheumatologic_Disorder: {
      key: "rheumatologic_disorder",
      value: "13",
    },
    Dementia: {
      key: "dementia",
      value: "14",
    },
    Immunosuppressive_Therapy: {
      key: "immunosuppressive_therapy",
      value: "15",
    },
    Other: {
      key: "other",
      value: "16",
      role: "input",
    },
  };
}
