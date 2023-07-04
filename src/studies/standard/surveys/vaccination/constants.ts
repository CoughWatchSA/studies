import { DateInputProps } from "case-editor-tools/surveys/types";
import { TResponse } from "../../../../common/types";
import { strings } from "./data/strings";

export const covidVaccineDateInputProps: DateInputProps = {
  dateInputMode: "YM",
  maxRelativeDate: {
    delta: { years: 0 },
  },
  minRelativeDate: {
    delta: { years: -2 },
  },
};

type CovidVaccineDosesTResponses = "Pfizer" | "JohnsonJohnson";
export const CovidVaccineDosesResponses: Record<CovidVaccineDosesTResponses, TResponse> = {
  Pfizer: {
    key: "pfizer",
    value: "0",
    role: "dateInput",
    placeholderText: strings["dateInput_year"],
    ...covidVaccineDateInputProps,
  },
  JohnsonJohnson: {
    key: "johnsonjohnson",
    value: "1",
    role: "dateInput",
    placeholderText: strings["dateInput_year"],
    ...covidVaccineDateInputProps,
  },
};
