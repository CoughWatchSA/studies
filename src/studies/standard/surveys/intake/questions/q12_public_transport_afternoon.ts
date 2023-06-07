import {
  LanguageMap,
  NumericSliderQuestion,
  NumericSliderQuestionOptions,
} from "../../../../../common/types";

export class Q12_PublicTransportAfternoon extends NumericSliderQuestion {
  options: NumericSliderQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q12_PublicTransportAfternoon.key, strings);

    this.options = {
      min: 0,
      max: 6,
      stepSize: 1,
    };
  }
}

export namespace Q12_PublicTransportAfternoon {
  export const key = "q12_public_transport_afternoon";
}
