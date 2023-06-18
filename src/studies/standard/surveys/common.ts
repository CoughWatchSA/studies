import { TResponse } from "../../../common/types";

export type TYesResponse = "Yes";

export const YesResponse: Record<TYesResponse, TResponse> = {
  Yes: {
    key: "yes",
    value: "1",
  },
};

export type TNoResponse = "No";

export const NoResponse: Record<TNoResponse, TResponse> = {
  No: {
    key: "no",
    value: "0",
  },
};

export type TYesNoResponses = TYesResponse | TNoResponse;

export const YesNoResponses: Record<TYesNoResponses, TResponse> = {
  ...YesResponse,
  ...NoResponse,
};
