import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";
import { StudyRules } from "case-editor-tools/types/studyRules";
import { Expression } from "survey-engine/data_types";
import { intake } from "./surveys/intake";
import { vaccination } from "./surveys/vaccination";

const entryRules: Expression[] = [
  StudyEngine.participantActions.assignedSurveys.add(intake.key, "normal"),
  StudyEngine.participantActions.assignedSurveys.add(vaccination.key, "normal"),
];


export const studyRules = new StudyRules(
    entryRules,
    []);