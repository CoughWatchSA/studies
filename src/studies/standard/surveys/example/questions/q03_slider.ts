import {
  LanguageMap,
  NumericSliderQuestion,
  NumericSliderQuestionOptions,
} from "../../../../../common/types";

export class Slider extends NumericSliderQuestion {
  options: NumericSliderQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Slider.key, strings);

    this.options = {
      min: 0,
      max: 8,
      stepSize: 1,
    };
  }
}

export namespace Slider {
  export const key = "q03_slider";
}
