const s = {
  name: {
    en: "Vaccination Questionnaire",
  },
  description: {
    en: "",
  },
  duration: {
    en: "Duration 5-10 minutes",
  },
  "q01_flu_vaccine.title": {
    en: "Have you received a flu vaccine for this year (2023)?",
  },
  "q01_flu_vaccine.yes": {
    en: "Yes",
  },
  "q01_flu_vaccine.no": {
    en: "No",
  },
  "q02_flu_vaccine_when.title": {
    en: "When were you vaccinated?",
  },
  "q02_flu_vaccine_when.inputLabel": {
    en: "Date",
  },
  "q03_flu_vaccine_previous_season.title": {
    en: "Have you received a flu vaccine for the previous season (2022)",
  },
  "q03_flu_vaccine_previous_season.yes": {
    en: "Yes",
  },
  "q03_flu_vaccine_previous_season.no": {
    en: "No",
  },
  "q04_covid_vaccine.title": {
    en: "Did you receive a COVID19 vaccine?",
  },
  "q04_covid_vaccine.yes": {
    en: "Yes",
  },
  "q04_covid_vaccine.no": {
    en: "No",
  },
  "q05_covid_vaccine_doses.title": {
    en: "How many doses of the Pfizer vaccine did you receive?",
  },
  "q05_covid_vaccine_doses.one_dose": {
    en: "One dose",
  },
  "q05_covid_vaccine_doses.two_doses": {
    en: "Two doses",
  },
  "q05_covid_vaccine_doses.three_doses": {
    en: "Three doses",
  },
  "q05_covid_vaccine_doses.four_doses": {
    en: "Four doses",
  },
  "q05_covid_vaccine_doses.five_doses": {
    en: "Five doses",
  },
  "q06_covid_vaccine_first_dose.title": {
    en: "Please select which vaccine did you receive for the first dose and when you received it",
  },
  "q06_covid_vaccine_first_dose.pfizer": {
    en: "Pfizer",
  },
  "q06_covid_vaccine_first_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q07_covid_vaccine_second_dose.title": {
    en: "Please select which vaccine did you receive for the second dose and when you received it",
  },
  "q07_covid_vaccine_second_dose.pfizer": {
    en: "Pfizer",
  },
  "q07_covid_vaccine_second_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q08_covid_vaccine_third_dose.title": {
    en: "Please select which vaccine did you receive for the third dose and when you received it",
  },
  "q08_covid_vaccine_third_dose.pfizer": {
    en: "Pfizer",
  },
  "q08_covid_vaccine_third_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q09_covid_vaccine_fourth_dose.title": {
    en: "Please select which vaccine did you receive for the fourth dose and when you received it",
  },
  "q09_covid_vaccine_fourth_dose.pfizer": {
    en: "Pfizer",
  },
  "q09_covid_vaccine_fourth_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q10_covid_vaccine_fifth_dose.title": {
    en: "Please select which vaccine did you receive for the fifth dose and when you received it",
  },
  "q10_covid_vaccine_fifth_dose.pfizer": {
    en: "Pfizer",
  },
  "q10_covid_vaccine_fifth_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q11_covid_vaccine_booster.title": {
    en: "Have you received a booster dose for COVID19?",
  },
  "q11_covid_vaccine_booster.yes": {
    en: "Yes",
  },
  "q11_covid_vaccine_booster.no": {
    en: "No",
  },
  "q12_covid_vaccine_booster_type.title": {
    en: "Which vaccine did you receive for your booster?",
  },
  "q12_covid_vaccine_booster_type.pfizer": {
    en: "Pfizer",
  },
  "q12_covid_vaccine_booster_type.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
};

export const strings = Object.fromEntries(
  Object.entries(s).map((value) => [value[0], new Map(Object.entries(value[1]))])
);
