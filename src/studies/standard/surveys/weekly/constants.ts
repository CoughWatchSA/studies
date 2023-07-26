import { DateInputProps } from "case-editor-tools/surveys/types";
import { TCommonResponseWithKeys } from "../../../../common/types";
import { strings } from "./data/strings";

export const DateOptions = {
  maxOnsetDays: 13,
};

export const illnessTestDateOptions: DateInputProps = {
  dateInputMode: "YMD",
  maxRelativeDate: {
    delta: { years: 0 },
  },
  minRelativeDate: {
    delta: { days: -13 },
  },
  placeholderText: strings["date_placeholder_ymd"],
};

export type TYesResponse = "Yes";
export const YesResponse: Record<TYesResponse, TCommonResponseWithKeys<TYesResponse>> = {
  Yes: {
    key: "yes",
    textKey: "yes",
    value: "1",
  },
};

export type TNoResponse = "No";
export const NoResponse: Record<TNoResponse, TCommonResponseWithKeys<TNoResponse>> = {
  No: {
    key: "no",
    textKey: "no",
    value: "0",
  },
};

export type TDontRemeberResponse = "DontRemember";
export const DontRememberResponse: Record<TDontRemeberResponse, TCommonResponseWithKeys<TDontRemeberResponse>> = {
  DontRemember: {
    key: "dont_remember",
    textKey: "dont_remember",
    value: "-1",
  },
};

export type TYesNoResponses = TYesResponse | TNoResponse;
export const YesNoResponses: Record<TYesNoResponses, TCommonResponseWithKeys<TYesNoResponses>> = {
  ...NoResponse,
  ...YesResponse,
};

export type TResponsesTestResult = "Positive" | "Negative" | "NotConclusive";
export const ResponsesTestResult: Record<TResponsesTestResult, TCommonResponseWithKeys<TResponsesTestResult>> = {
  Positive: {
    key: "positive",
    value: "0",
    textKey: "test_result.positive",
  },
  Negative: {
    key: "negative",
    value: "1",
    textKey: "test_result.negative",
  },
  NotConclusive: {
    key: "not_conclusive",
    value: "2",
    textKey: "test_result.not_conclusive",
  },
};

export type TResponsesTestType = "Pcr" | "Rapid";

export const ResponsesTestType: Record<TResponsesTestType, TCommonResponseWithKeys<TResponsesTestType>> = {
  Pcr: {
    key: "pcr",
    value: "0",
    textKey: "test_type.pcr",
  },
  Rapid: {
    key: "rapid",
    value: "1",
    textKey: "test_type.rapid",
  }
};
