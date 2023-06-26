import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";
import { ResponsesTestResult } from "../constants";

export class Q07_1a_InfluenzaTestResults extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q07_1a_InfluenzaTestResults.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q07_1a_InfluenzaTestResults.Responses, strings),
        };
    }
}

export namespace Q07_1a_InfluenzaTestResults {
    export const key = "q07_1a_influenza_test_results";

    export const StandardResponses = ResponsesTestResult;
    export const Responses = StandardResponses;
}