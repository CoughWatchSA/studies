import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q05_Education extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q05_Education.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [
          Q05_Education.Responses.Diploma_Degree_Postgraduate,
          Q05_Education.Responses.Matric_Certificate,
          Q05_Education.Responses.Primary_to_High_School,
          Q05_Education.Responses.No_Formal_Schooling,
        ],
        strings
      ),
    };
  }
}

export namespace Q05_Education {
  export const key = "q05_education";

  type TResponses =
    | "Diploma_Degree_Postgraduate"
    | "Matric_Certificate"
    | "Primary_to_High_School"
    | "No_Formal_Schooling";

  export const Responses: Record<TResponses, TResponse> = {
    Diploma_Degree_Postgraduate: {
      key: "diploma_degree_postgraduate",
      value: "0",
    },
    Matric_Certificate: {
      key: "matric_certificate",
      value: "1",
    },
    Primary_to_High_School: {
      key: "primary_to_high_school",
      value: "2",
    },
    No_Formal_Schooling: {
      key: "no_formal_schooling",
      value: "3",
    },
  };
}
