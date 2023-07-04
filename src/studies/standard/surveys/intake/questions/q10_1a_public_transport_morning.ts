import { LanguageMap, NumericSliderQuestion, NumericSliderQuestionOptions } from "../../../../../common/types";

export class Q10_1a_PublicTransportMorning extends NumericSliderQuestion {
  options: NumericSliderQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q10_1a_PublicTransportMorning.key, strings);

    this.options = {
      min: 0,
      max: 6,
      stepSize: 1,
    };
  }
}

export namespace Q10_1a_PublicTransportMorning {
  export const key = "q10_1a_public_transport_morning";
}
