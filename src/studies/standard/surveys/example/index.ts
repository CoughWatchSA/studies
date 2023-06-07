import { Survey } from "../../../../common/types";
import { SingleChoice } from "./questions/q01_single_choice";
import { strings } from "./data/strings";
import { Numeric } from "./questions/q02_numeric";
import { Slider } from "./questions/q03_slider";

export class Example extends Survey {
  static surveyKey = "example";

  constructor() {
    super(Example.surveyKey, strings);
  }

  buildSurvey() {
    this.addQuestion(SingleChoice);

    this.addQuestion(Numeric);

    this.addQuestion(Slider);
  }
}
