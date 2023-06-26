import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";
import { ResponsesTestResult } from "../constants";

export class Q07_2b_CovidTestType extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q07_2b_CovidTestType.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q07_2b_CovidTestType.Responses, strings),
        };
    }
}

export namespace Q07_2b_CovidTestType {
    export const key = "q07_2b_covid_test_type";

    export const StandardResponses = ResponsesTestResult;
    export const Responses = StandardResponses;
}