import { LanguageMap, NumericSliderQuestion, NumericSliderQuestionOptions } from "../../../../../common/types";

export class Q10_1b_PublicTransportAfternoon extends NumericSliderQuestion {
  options: NumericSliderQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q10_1b_PublicTransportAfternoon.key, strings);

    this.options = {
      min: 0,
      max: 6,
      stepSize: 1,
    };
  }
}

export namespace Q10_1b_PublicTransportAfternoon {
  export const key = "q10_1b_public_transport_afternoon";
}
