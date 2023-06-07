import {
  LanguageMap,
  NumericSliderQuestion,
  NumericSliderQuestionOptions,
} from "../../../../../common/types";

export class Q11_PublicTransportMorning extends NumericSliderQuestion {
  options: NumericSliderQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q11_PublicTransportMorning.key, strings);

    this.options = {
      min: 0,
      max: 6,
      stepSize: 1,
    };
  }
}

export namespace Q11_PublicTransportMorning {
  export const key = "q11_public_transport_morning";
}
