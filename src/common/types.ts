import { Expression, ExpressionArg, LocalizedString, SurveyItem, SurveySingleItem } from "survey-engine/data_types";
import { SingleChoiceOptionTypes, SurveyItems } from "case-editor-tools/surveys";
import {
  DateInputProps,
  DateInputQuestionProps,
  Item,
  NumericInputQuestionProps,
  OptionDef,
  SurveyDefinition,
  TextInputProps,
  TextInputQuestionProps,
} from "case-editor-tools/surveys/types";
import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";

import { DropDownQuestionProps, OptionQuestionProps } from "case-editor-tools/surveys/survey-items";

import _ from "lodash";
import type { SnakeCase } from "type-fest";

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

  buildQuestion<T extends Item>(
    Question: new (key: string, strings: Record<string, Map<string, string>>) => T
  ): SurveySingleItem {
    return new Question(this.key, this.strings).get();
  }

  // FIXME: for backward compatibility, should be removed
  addQuestion<T extends Item>(
    Question: new (key: string, strings: Record<string, Map<string, string>>) => T,
    condition?: Expression
  ): SurveySingleItem {
    const item = new Question(this.key, this.strings).get();

    if (condition) item.condition = condition;

    this.addItem(item);

    return item;
  }

  addConditionalItem(item: SurveyItem, condition: Expression) {
    if (condition) item.condition = condition;

    super.addItem(item);
  }
}

export type DateInputProperties = DateInputProps & { key: string; displayCondition?: Expression };

export type TChoiceBaseResponse = {
  key: string;
  value: string;
  textKey?: string;
  disabled?: {
    operator: "any" | "none" | "all";
    valueSelectors: Array<() => string>;
  };
};

export type TChoiceOptionResponse = {
  role?: "option";
} & TChoiceBaseResponse;

export type TChoiceTextInputResponse = {
  role: "input";
} & TChoiceBaseResponse &
  TextInputProps;

export type TChoiceDateInputResponse = {
  role: "dateInput";
} & TChoiceBaseResponse &
  DateInputProps;

// FIXME: for backward compatibility, to be dropped
export type TChoiceDateInputResponseOld = {
  role: "dateInput_old";
  dateInputProperties: DateInputProps;
} & TChoiceBaseResponse;

export type TChoiceResponse =
  | TChoiceOptionResponse
  | TChoiceTextInputResponse
  | TChoiceDateInputResponse
  | TChoiceDateInputResponseOld;

export type TResponsesKeys<T extends string> = keyof { [K in keyof Record<T, object> as `${SnakeCase<K>}`]: string };
export type TResponseWithKeys<T extends string> = TChoiceResponse & { key: TResponsesKeys<T> };
export type TCommonResponseWithKeys<T extends string> = TChoiceResponse & { key: TResponsesKeys<T>; textKey: string };
export type TResponse = TChoiceResponse;

export type TResponsesText<
  T extends { key: string; Responses?: Record<string, TResponse>; StandardResponses?: Record<string, TResponse> }
> = {
  [K in keyof Omit<T["Responses"], keyof T["StandardResponses"]> | "title" as `${SnakeCase<T["key"]>}.${SnakeCase<K> &
    string}`]: { en: string };
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

// NOTE: converts TResponse[] to OptionDef[], maybe using helpers from
// case-editor-tools, TChoiceResponse is basically an OptionDef with an added
// property:
// - key
// not to be confused (even if you are led to) with the OptionDef key
export function ToOptionDef(
  obj: QuestionItem,
  responses: TResponse[],
  text: Record<string, Map<string, string>>
): OptionDef[] {
  return responses.map((response) => {
    let def;

    // FIXME: maybe change key -> id and value -> key in TBaseResponse
    const props = {
      ...response,
      ...{
        key: response.value,
        content: response.textKey ? text[response.textKey] : text[`${obj.itemKey}.${response.key}`],
      },
      ...{
        disabled:
          // FIXME: why multiplechoice? because enabling / disabling options makes
          // sense only for multiple choice
          response.disabled !== undefined
            ? StudyEngine.multipleChoice[response.disabled.operator](
                obj.key,
                ...response.disabled.valueSelectors.map((selector) => selector())
              )
            : undefined,
      },
    };

    // FIXME: these are all single option helpers, they will be used also for
    // multiple choice options..
    switch (props.role) {
      case "option": {
        def = SingleChoiceOptionTypes.option(props.key, props.content);
        break;
      }
      case "input": {
        if (props.inputLabel === undefined) props.inputLabel = props.content;
        def = SingleChoiceOptionTypes.textInput(props);
        break;
      }
      case "dateInput": {
        if (props.inputLabelText === undefined) props.inputLabelText = props.content;
        // TODO: fix placeholderText inside SingleChoiceOptionTypes.dateInput
        def = { ...SingleChoiceOptionTypes.dateInput(props), ...{ description: props.placeholderText } };
        break;
      }
      case "dateInput_old": {
        const props_ = { ...props.dateInputProperties, ...props };
        if (props_.inputLabelText === undefined) props_.inputLabelText = props_.content;

        def = {
          ...SingleChoiceOptionTypes.dateInput(props_),
          // TODO: fix placeholderText inside SingleChoiceOptionTypes.dateInput
          ...{ role: "dateInput", description: props_.placeholderText },
        };
        break;
      }
      default: {
        def = SingleChoiceOptionTypes.option(props.key, props.content);
      }
    }

    return def;
  });
}

// TODO: MD would like to get rid of the TResponse[] and work directly with the
// Responses object using Object.keys but there is no strict guarantee on the
// iteration order on the keys:
//
// https://dev.to/frehner/the-order-of-js-object-keys-458d
//
// unless we limit ourselves to strings, maybe raising if any key can be cast to
// a number
export function ToOptionDefDict(
  obj: QuestionItem,
  responses: Record<string, TChoiceResponse>,
  text: Record<string, Map<string, string>>
): OptionDef[] {
  return ToOptionDef(
    obj,
    Object.keys(responses).map((key) => ({
      ...{ key: responses[key].key },
      ...responses[key],
    })),
    text
  );
}
