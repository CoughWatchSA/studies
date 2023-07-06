import {
  SingleChoiceQuestionOptions,
  SingleChoiceQuestion,
  TResponse,
  ToOptionDef,
  LanguageMap,
} from "../../../../../common/types";

export class Q10_PublicTransport extends SingleChoiceQuestion {
  options: SingleChoiceQuestionOptions;

  constructor(parentKey: string, strings: LanguageMap) {
    super(parentKey, Q10_PublicTransport.key, strings);

    this.options = {
      isRequired: true,
      responseOptions: ToOptionDef(
        this,
        [Q10_PublicTransport.Responses.No, Q10_PublicTransport.Responses.Yes],
        strings
      ),
    };
  }
}

export namespace Q10_PublicTransport {
  export const key = "q10_public_transport";

  type TResponses = "Yes" | "No";

  export const Responses: Record<TResponses, TResponse> = {
    Yes: {
      key: "yes",
      value: "1",
    },
    No: {
      key: "no",
      value: "0",
    },
  };
}
