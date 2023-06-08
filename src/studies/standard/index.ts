import { Study } from "case-editor-tools/types/study";
import { studyRules } from "./rules";
import { Intake } from "./surveys/intake";

export const StandardStudy: Study = {
  studyKey: "standard",
  outputFolderName: "standard",
  surveys: [new Intake()],
  studyRules: studyRules,
};
