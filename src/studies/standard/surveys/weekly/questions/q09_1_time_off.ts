import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    TResponse,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";

import { TYesNoResponses, YesNoResponses } from "../constants";

export class Q09_1_TimeOff extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q09_1_TimeOff.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q09_1_TimeOff.Responses, strings),
        };
    }
}

export namespace Q09_1_TimeOff {
    export const key = "q09_1_time_off";

    export const StandardResponses = YesNoResponses;
    export const Responses = StandardResponses;
}