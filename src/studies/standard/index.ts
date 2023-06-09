import { Study } from "case-editor-tools/types/study";
import { studyRules } from "./rules";
import { Intake } from "./surveys/intake";
import { Vaccination } from "./surveys/vaccination";

export const StandardStudy: Study = {
  studyKey: "standard",
  outputFolderName: "standard",
  surveys: [new Intake(), new Vaccination],
  studyRules: studyRules,
};
