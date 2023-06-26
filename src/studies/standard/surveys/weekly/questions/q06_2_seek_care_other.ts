import {
    SingleChoiceQuestionOptions,
    SingleChoiceQuestion,
    ToOptionDefDict,
    LanguageMap,
} from "../../../../../common/types";

import { YesNoResponses } from "../constants";

export class Q06_2_SeekCareOther extends SingleChoiceQuestion {
    options: SingleChoiceQuestionOptions;

    constructor(parentKey: string, strings: LanguageMap) {
        super(parentKey, Q06_2_SeekCareOther.key, strings);

        this.options = {
            isRequired: true,
            responseOptions: ToOptionDefDict(this, Q06_2_SeekCareOther.Responses, strings),
        };
    }
}

export namespace Q06_2_SeekCareOther {
    export const key = "q06_2_seek_care_other";

    export const StandardResponses = YesNoResponses;
    export const Responses = StandardResponses;
}