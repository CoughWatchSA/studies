import { Expression, ExpressionArg, LocalizedString, SurveyItem } from "survey-engine/data_types";
import { SingleChoiceOptionTypes, SurveyItems } from "case-editor-tools/surveys";
import {
  DateInputProps,
  DateInputQuestionProps,
  Item,
  NumericInputQuestionProps,
  OptionDef,
  SurveyDefinition,
  TextInputQuestionProps,
} from "case-editor-tools/surveys/types";
import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";

import { DropDownQuestionProps, OptionQuestionProps } from "case-editor-tools/surveys/survey-items";

export type LanguageMap = Record<string, Map<string, string>>;

// this should be exported by survey engine
export const generateLocStrings = (translations: Map<string, string>): LocalizedString[] => {
  const locString = new Array<LocalizedString>();
  translations.forEach((value, key) => {
    const item: LocalizedString = {
      code: key,
      parts: [{ str: value }],
    };
    locString.push(item);
  });
  return locString;
};

export abstract class Survey extends SurveyDefinition {
  strings: LanguageMap;

  constructor(surveyKey: string, strings: LanguageMap) {
    super({
      surveyKey: surveyKey,
      name: strings["name"],
      description: strings["description"],
      durationText: strings["duration"],
    });

    this.strings = strings;
  }

  addQuestion<T extends Item>(
    Question: new (key: string, strings: Record<string, Map<string, string>>) => T,
    condition?: Expression
  ): SurveyItem {
    const item = new Question(this.key, this.strings).get();

    if (condition) item.condition = condition;

    this.addItem(item);

    return item;
  }
}

export type DateInputProperties = DateInputProps & { key: string; displayCondition?: Expression };

export type TResponse = {
  key: string;
  value: string;
  role?: "option" | "input" | "dateInput";
  dateInputProperties?: DateInputProperties;
  disabled?: {
    operator: "any" | "none" | "all";
    valueSelectors: Array<() => string>;
  };
};

type CommonOptions = {
  parentKey: string;
  itemKey: string;
  questionText: Map<string, string>;
};

abstract class QuestionItem extends Item {
  strings: LanguageMap;
  commonOptions: CommonOptions;
  itemKey: string;

  constructor(parentKey: string, itemKey: string, strings: LanguageMap) {
    super(parentKey, itemKey);

    this.itemKey = itemKey;
    this.strings = strings;
    this.commonOptions = {
      parentKey: this.parentKey,
      itemKey: this.itemKey,
      questionText: this.strings[`${this.itemKey}.title`],
    };
  }
}

export type SingleChoiceQuestionOptions = Omit<OptionQuestionProps, keyof CommonOptions>;

export abstract class SingleChoiceQuestion extends QuestionItem {
  abstract options: SingleChoiceQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.singleChoice({ ...this.commonOptions, ...this.options });
  }
}

export type DropDownQuestionOptions = Omit<DropDownQuestionProps, keyof CommonOptions>;

export abstract class DropDownQuestion extends QuestionItem {
  abstract options: DropDownQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.dropDown({ ...this.commonOptions, ...this.options });
  }
}

export type MultipleChoiceQuestionOptions = Omit<OptionQuestionProps, keyof CommonOptions>;

export abstract class MultipleChoiceQuestion extends QuestionItem {
  abstract options: MultipleChoiceQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.multipleChoice({
      ...this.commonOptions,
      ...this.options,
    });
  }
}

export type NumericInputQuestionOptions = Omit<
  NumericInputQuestionProps,
  keyof CommonOptions | keyof Pick<NumericInputQuestionProps, "inputLabel">
>;

export abstract class NumericInputQuestion extends QuestionItem {
  abstract options: NumericInputQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.numericInput({
      ...this.commonOptions,
      ...this.options,
      inputLabel: this.strings[`${this.itemKey}.inputLabel`],
    });
  }
}

export type NumericSliderQuestionOptions = {
  min?: number | ExpressionArg;
  max?: number | ExpressionArg;
  stepSize?: number | ExpressionArg;
};

export abstract class NumericSliderQuestion extends QuestionItem {
  abstract options: NumericSliderQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.numericSlider({
      ...this.commonOptions,
      ...this.options,
      sliderLabel: this.strings[`${this.itemKey}.sliderLabel`],
      noResponseLabel: this.strings[`${this.itemKey}.noResponseLabel`],
    });
  }
}

export type TextInputQuestionOptions = Omit<
  TextInputQuestionProps,
  keyof CommonOptions | keyof Pick<TextInputQuestionProps, "inputLabel" | "placeholderText">
>;

export abstract class TextInputQuestion extends QuestionItem {
  abstract options: TextInputQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.textInput({
      ...this.commonOptions,
      ...this.options,
      inputLabel: this.strings[`${this.itemKey}.inputLabel`],
      placeholderText: this.strings[`${this.itemKey}.placeholder`],
    });
  }
}

export type DateInputQuestionOptions = Omit<
  DateInputQuestionProps,
  keyof CommonOptions | keyof Pick<DateInputQuestionProps, "inputLabelText">
>;

export abstract class DateInputQuestion extends QuestionItem {
  abstract options: DateInputQuestionOptions;

  buildItem(): SurveyItem {
    return SurveyItems.dateInput({
      ...this.commonOptions,
      ...this.options,
      inputLabelText: this.strings[`${this.itemKey}.inputLabel`],
    });
  }
}

export function ToOptionDef(
  obj: QuestionItem,
  responses: TResponse[],
  text: Record<string, Map<string, string>>
): OptionDef[] {
  return responses.map((response) => {
    const dateInputProperties = response.dateInputProperties
      ? SingleChoiceOptionTypes.dateInput(response.dateInputProperties).optionProps
      : {};

    return {
      key: response.value,
      role: response.role ?? "option",
      content: text[`${obj.itemKey}.${response.key}`],
      optionProps: {
        ...dateInputProperties,
      },
      disabled:
        response.disabled !== undefined
          ? StudyEngine.multipleChoice[response.disabled.operator](
              obj.key,
              ...response.disabled.valueSelectors.map((selector) => selector())
            )
          : undefined,
    };
  });
}
