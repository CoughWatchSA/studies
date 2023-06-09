import { DateInputProperties } from "./types";

export const numericInputResponseKey = "rg.num";

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
