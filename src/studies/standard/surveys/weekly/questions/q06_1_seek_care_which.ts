import {
  ToOptionDefDict,
  LanguageMap,
  MultipleChoiceQuestion,
  MultipleChoiceQuestionOptions,
  TResponseWithKeys,
} from "../../../../../common/types";

export class Q06_1_SeekCareWhich extends MultipleChoiceQuestion {
  options: MultipleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q06_1_SeekCareWhich.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDefDict(this, Q06_1_SeekCareWhich.Responses, strings),
    };
  }
}

export namespace Q06_1_SeekCareWhich {
  export const key = "q06_1_seek_care_which";

  type TResponses = "PrivateGp" | "GpNurse" | "Pharmacist" | "PublicClinic" | "HospitalAdmission";

  export const Responses: Record<TResponses, TResponseWithKeys<TResponses>> = {
    PrivateGp: { key: "private_gp", value: "0" },
    GpNurse: { key: "gp_nurse", value: "1" },
    Pharmacist: { key: "pharmacist", value: "2" },
    PublicClinic: { key: "public_clinic", value: "3" },
    HospitalAdmission: { key: "hospital_admission", value: "4" },
  };
}
