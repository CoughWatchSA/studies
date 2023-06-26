import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    TResponse,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";

import { TYesNoResponses, YesNoResponses } from "../constants";

export class Q09_RoutineChange extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q09_RoutineChange.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q09_RoutineChange.Responses, strings),
        };
    }
}

export namespace Q09_RoutineChange {
    export const key = "q09_routine_change";

    export const StandardResponses = YesNoResponses;
    export const Responses = StandardResponses;
}