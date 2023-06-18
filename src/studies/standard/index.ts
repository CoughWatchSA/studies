import { Study } from "case-editor-tools/types/study";
import { studyRules } from "./rules";
import { intake } from "./surveys/intake";
import { vaccination } from "./surveys/vaccination";
import { weekly } from "./surveys/weekly";

export const StandardStudy: Study = {
  studyKey: "standard",
  outputFolderName: "standard",
  surveys: [intake, weekly, vaccination],
  studyRules: studyRules,
};
