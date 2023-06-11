import { DateInputProperties } from "../../../../common/types";

export const covidVaccineDateInputProps: DateInputProperties = {
  key: "date",
  dateInputMode: "YM",
  maxRelativeDate: {
    delta: { years: 0 },
  },
  minRelativeDate: {
    delta: { years: -2 },
  },
};
