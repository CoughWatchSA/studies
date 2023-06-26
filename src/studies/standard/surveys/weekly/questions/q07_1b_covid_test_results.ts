import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";
import { ResponsesTestResult } from "../constants";

export class Q07_1b_CovidTestResults extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q07_1b_CovidTestResults.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q07_1b_CovidTestResults.Responses, strings),
        };
    }
}

export namespace Q07_1b_CovidTestResults {
    export const key = "q07_1b_covid_test_results";

    export const StandardResponses = ResponsesTestResult;
    export const Responses = StandardResponses;
}