import { StudyRules } from "case-editor-tools/types/studyRules";
import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";
import { Intake } from "./surveys/intake";
import { Expression } from "survey-engine/data_types";

const entryRules: Expression[] = [
    StudyEngine.participantActions.assignedSurveys.add(Intake.surveyKey, 'normal')
];


export const studyRules = new StudyRules(
    entryRules,
    []);