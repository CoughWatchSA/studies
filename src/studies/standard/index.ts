import { Study } from "case-editor-tools/types/study";
import { Example } from "./surveys/example";

export const StandardStudy: Study = {
  studyKey: "standard",
  outputFolderName: "standard",
  surveys: [new Example()],
};
