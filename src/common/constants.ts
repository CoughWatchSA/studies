import { DateInputProperties } from "./types";

// this should be exported from survey engine
export const numericInputResponseKey = "rg.num";
export const textInputResponseKey = "rg.ic";

export const fullAge = 18;

export const covidVaccineDateInputProps: DateInputProperties = {
  key: "date",
  dateInputMode: "YM",
  maxRelativeDate: {
    delta: { years: 0 },
  },
  minRelativeDate: {
    delta: { years: -3 },
  },
};
