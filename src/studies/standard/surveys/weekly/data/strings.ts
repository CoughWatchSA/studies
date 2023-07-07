import { TResponsesText } from "../../../../../common/types";
import {
  Q01_1_SymptomsSameEpisode,
  Q01_SymptomsAny,
  Q02_SymptomsWhich,
  Q03_SymptomsEnded,
  Q04_SymptomsStarted,
  Q05_1_Temperature,
  Q05_FeverStarted,
  Q06_1_SeekCareWhich,
  Q06_2_SeekCareOther,
  Q06_3_SeekCareOtherWhich,
  Q06_SeekCare,
  Q07_1a_InfluenzaTestResults,
  Q07_1b_CovidTestResults,
  Q07_2a_InfluenzaTestType,
  Q07_2b_CovidTestType,
  Q07_3a_InfluenzaTestDate,
  Q07_3b_CovidTestDate,
  Q07_TestTakenAny,
  Q08_MedicationAny,
  Q09_1_TimeOff,
  Q09_2_TimeOffDays,
  Q09_RoutineChange,
} from "../questions";

const commonStrings = {
  yes: { en: "Yes" },
  no: { en: "No" },
  dont_remember: {
    en: "I don't know / I don't remember",
  },
  date_placeholder_ymd: {
    en: "select date",
  },
  please_specify: {
    en: "please specify",
  },
  "test_result.positive": {
    en: "Positive",
  },
  "test_result.negative": {
    en: "Negative",
  },
  "test_result.not_conclusive": {
    en: "N/A",
  },
  "test_type.pcr": {
    en: "PCR",
  },
  "test_type.rapid": {
    en: "Rapid",
  },
  "test_type.unknown": {
    en: "I do not know",
  },
  ends_before_starting: {
    en: "End date must be posterior to start date",
  },
  starts_after_ending: {
    en: "Start date must be anterior to end date",
  },
  outside_symptoms_span: {
    en: "Date must be inside symptoms interval",
  },
  not_required_hint: {
    en: "You can leave this answer blank if you don't rememenber / don't know what to answer",
  },
  "input_not_filled": {
    en: "Please fill the input field",
  },
};

const questionsStrings: Record<"name" | "description" | "duration", { en: string }> &
  TResponsesText<typeof Q01_SymptomsAny> &
  TResponsesText<typeof Q01_1_SymptomsSameEpisode> &
  TResponsesText<typeof Q02_SymptomsWhich> &
  TResponsesText<typeof Q03_SymptomsEnded> &
  TResponsesText<typeof Q04_SymptomsStarted> &
  TResponsesText<typeof Q05_FeverStarted> &
  TResponsesText<typeof Q05_1_Temperature> &
  TResponsesText<typeof Q06_SeekCare> &
  TResponsesText<typeof Q06_1_SeekCareWhich> &
  TResponsesText<typeof Q06_2_SeekCareOther> &
  TResponsesText<typeof Q06_3_SeekCareOtherWhich> &
  TResponsesText<typeof Q07_TestTakenAny> &
  TResponsesText<typeof Q07_1a_InfluenzaTestResults> &
  TResponsesText<typeof Q07_2a_InfluenzaTestType> &
  TResponsesText<typeof Q07_3a_InfluenzaTestDate> &
  TResponsesText<typeof Q07_1b_CovidTestResults> &
  TResponsesText<typeof Q07_2b_CovidTestType> &
  TResponsesText<typeof Q07_3b_CovidTestDate> &
  TResponsesText<typeof Q08_MedicationAny> &
  TResponsesText<typeof Q09_RoutineChange> &
  TResponsesText<typeof Q09_1_TimeOff> &
  TResponsesText<typeof Q09_2_TimeOffDays> = {
  name: {
    en: "Weekly Symptoms Questionnaire",
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
  "q01_1_symptoms_same_episode.title": {
    en: "When you filled in the previous questionnaire, you indicated that you were still ill. Are the symptoms you are reporting now part of the same episode?",
  },
  "q02_symptoms_which.title": {
    en: "Please select the symptoms you experienced this week:",
  },
  "q02_symptoms_which.fever": { en: "Fever" },
  "q02_symptoms_which.chills": { en: "Chills" },
  "q02_symptoms_which.running_nose": { en: "Runny or blocked nose" },
  "q02_symptoms_which.sneezing": { en: "Sneezing" },
  "q02_symptoms_which.sore_throat": { en: "Sore throat" },
  "q02_symptoms_which.cough": { en: "Cough" },
  "q02_symptoms_which.shortness_breath": { en: "Shortness of breath" },
  "q02_symptoms_which.headache": { en: "Headache" },
  "q02_symptoms_which.muscle_pain": { en: "Muscle/joint pain" },
  "q02_symptoms_which.chest_pain": { en: "Chest pain" },
  "q02_symptoms_which.feeling_tired": { en: "Feeling tired or exhausted (malaise)" },
  "q02_symptoms_which.loss_appetite": { en: "Loss of appetite" },
  "q02_symptoms_which.colored_sputum": { en: "Colored sputum/phlegm" },
  "q02_symptoms_which.bloodshot_eyes": { en: "Watery, bloodshot eyes" },
  "q02_symptoms_which.nausea": { en: "Nausea" },
  "q02_symptoms_which.vomiting": { en: "Vomiting" },
  "q02_symptoms_which.diarrhea": { en: "Diarrhea" },
  "q02_symptoms_which.stomach_ache": { en: "Stomach ache" },
  "q02_symptoms_which.loss_smell": { en: "Loss of smell" },
  "q02_symptoms_which.loss_taste": { en: "Loss of taste" },
  "q02_symptoms_which.nose_bleed": { en: "Nose bleed" },
  "q02_symptoms_which.other": { en: "Other:" },
  "q03_symptoms_ended.title": {
    en: "Have your symptoms ended?",
  },
  "q03_symptoms_ended.yes": {
    en: "Yes, on: ",
  },
  "q03_symptoms_ended.ongoing": {
    en: "Still ongoing",
  },
  "q03_symptoms_ended.dont_remember": {
    en: "Yes, I don't remember when",
  },
  "q04_symptoms_started.title": {
    en: "When did the first symptoms appear?",
  },
  "q04_symptoms_started.date": {
    en: "",
  },
  "q05_fever_started.title": {
    en: "When did your fever begin?",
  },
  "q05_fever_started.date": {
    en: "",
  },
  "q05_1_temperature.title": {
    en: "Did you measure your temperature and if so, what was the temperature?",
  },
  "q05_1_temperature.no": {
    en: "I haven’t measured it",
  },
  "q05_1_temperature.below37": {
    en: "Yes, below 37°C",
  },
  "q05_1_temperature.between37": {
    en: "Yes, between 37° - 37.4°C",
  },
  "q05_1_temperature.between375": {
    en: "Yes, between 37.5° - 37.9°C",
  },
  "q05_1_temperature.between38": {
    en: "Yes, between 38° – 38.9°C",
  },
  "q05_1_temperature.between39": {
    en: "Yes, between 39° - 39.9°C",
  },
  "q05_1_temperature.above39": {
    en: "Yes, 40°C or more",
  },
  "q06_seek_care.title": {
    en: "Because of your symptoms, did you seek any medical care (face-to-face visit or teleconsult)?",
  },
  "q06_1_seek_care_which.title": {
    en: "Please indicate which medical care option you sought:",
  },
  "q06_1_seek_care_which.private_gp": {
    en: "Private GP",
  },
  "q06_1_seek_care_which.gp_nurse": {
    en: "GP’s practice or pharmacy nurse",
  },
  "q06_1_seek_care_which.pharmacist": {
    en: "Pharmacist",
  },
  "q06_1_seek_care_which.public_clinic": {
    en: "Public Clinic",
  },
  "q06_1_seek_care_which.hospital_admission": {
    en: "Hospital admission",
  },
  "q06_2_seek_care_other.title": {
    en: "Did you seek any other forms of care or interventions?",
  },
  "q06_3_seek_care_other_which.title": {
    en: "Which other forms of care or interventions did you seek?",
  },
  "q06_3_seek_care_other_which.google_search": {
    en: "Google/Internet search",
  },
  "q06_3_seek_care_other_which.home_remedies": {
    en: "Home remedies",
  },
  "q06_3_seek_care_other_which.traditional_healer": {
    en: "Traditional healer",
  },
  "q06_3_seek_care_other_which.other": {
    en: "Other:",
  },
  "q07_test_taken_any.title": {
    en: "Did you have any test taken for this illness?",
  },
  "q07_test_taken_any.influenza": {
    en: "Influenza",
  },
  "q07_test_taken_any.covid": {
    en: "Covid19",
  },
  "q07_test_taken_any.none": {
    en: "None of the above",
  },"q07_1a_influenza_test_results.title": {
    en: "What was the result for your Influenza test?",
  },
  "q07_2a_influenza_test_type.title": {
    en: "What type of test did you take for Influenza?",
  },
  "q07_3a_influenza_test_date.title": {
    en: "When did you get tested for Influenza?",
  },
  "q07_3a_influenza_test_date.date": {
    en: "",
  },
  "q07_1b_covid_test_results.title": {
    en: "What was the result for your Covid test?",
  },
  "q07_2b_covid_test_type.title": {
    en: "What type of test did you take for Covid?",
  },
  "q07_3b_covid_test_date.title": {
    en: "When did you get tested for Covid?",
  },
  "q07_3b_covid_test_date.date": {
    en: "",
  },
  "q08_medication_any.title": {
    en: "Did you take any medication for these symptoms?",
  },
  "q08_medication_any.no_medication": {
    en: "No medication",
  },
  "q08_medication_any.pain_killers": {
    en: "Pain Killers (e.g. paracetamol, ibuprofen, aspirin etc)",
  },
  "q08_medication_any.cough_medication": {
    en: "Cough medications",
  },
  "q08_medication_any.antivirals": {
    en: "Antivirals (Tamiflu, Relenza)",
  },
  "q08_medication_any.antibiotics": {
    en: "Antibiotics",
  },
  "q08_medication_any.traditional_medicine": {
    en: "Traditional medicine",
  },
  "q08_medication_any.home_remedies": {
    en: "Home remedies",
  },
  "q08_medication_any.other": {
    en: "Other",
  },
  "q09_routine_change.title": {
    en: "Did you change your daily routine because of your illness?",
  },
  "q09_1_time_off.title": {
    en: "Did you take time off work or school as a result of your illness?",
  },
  "q09_2_time_off_days.one": { en: "1 day" },
  "q09_2_time_off_days.two": { en: "2 days" },
  "q09_2_time_off_days.three": { en: "3 days" },
  "q09_2_time_off_days.four_more": { en: "4 or more days" },
  "q09_2_time_off_days.title": {
    en: "If yes, how many days of school or work did you take off?",
  },
};

export const strings = Object.fromEntries(
  Object.entries({ ...commonStrings, ...questionsStrings }).map((value) => [
    value[0],
    new Map(Object.entries(value[1])),
  ])
);
