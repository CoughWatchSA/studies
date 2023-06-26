import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";
import { ResponsesTestType } from "../constants";

export class Q07_2a_InfluenzaTestType extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q07_2a_InfluenzaTestType.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q07_2a_InfluenzaTestType.Responses, strings),
        };
    }
}

export namespace Q07_2a_InfluenzaTestType {
    export const key = "q07_2a_influenza_test_type";

    export const StandardResponses = ResponsesTestType;
    export const Responses = StandardResponses;
}