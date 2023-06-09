import { SurveyEngine } from "case-editor-tools/surveys";
import {
  LanguageMap,
  DateInputQuestion,
  DateInputQuestionOptions,
} from "../../../../../common/types";

export class Q02_FluVaccineWhen extends DateInputQuestion {
  options: DateInputQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q02_FluVaccineWhen.key, strings);

    this.options = {
      isRequired: true,
      dateInputMode: "YM",
      maxRelativeDate: {
        delta: { years: 1 },
      },
      minRelativeDate: {
        delta: { years: -1 },
      },
    };
  }
}

export namespace Q02_FluVaccineWhen {
  export const key = "q02_flu_vaccine_when";
}
