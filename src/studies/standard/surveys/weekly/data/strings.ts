const s = {
  name: {
    en: "Weekly Questionnaire",
  },
  description: {
    en: "",
  },
  duration: {
    en: "Duration 5-10 minutes",
  },
  "q01_symptoms_any.title": {
    en: "Have you experienced any symptoms in the past week?",
  },
  "q01_symptoms_any.yes": {
    en: "Yes",
  },
  "q01_symptoms_any.no": {
    en: "No",
  },
  "q02_symptoms_same_episode.title": {
    en: "When you filled in the previous questionnaire, you indicated that you were still ill. Are the symptoms you are reporting now part of the same episode?",
  },
  "q02_symptoms_same_episode.yes": {
    en: "Yes",
  },
  "q02_symptoms_same_episode.no": {
    en: "No",
  },
  "q03_symptoms_ended.title": {
    en: "Have your symptoms ended?",
  },
  "q03_symptoms_ended.yes": {
    en: "Yes, on: ",
  },
  "q03_symptoms_ended.yes.date_placeholder": {
    en: "Select date",
  },
  "q03_symptoms_ended.ongoing": {
    en: "Still ongoing",
  },
};

export const strings = Object.fromEntries(
  Object.entries(s).map((value) => [value[0], new Map(Object.entries(value[1]))])
);
