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
  dateInput_year: {
    en: "Year",
  },
  leave_date_blank: {
    en: "Leave the date blank if you don't remember",
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
  "q01_1_flu_vaccine_when.title": {
    en: "When were you vaccinated?",
  },
  "q01_1_flu_vaccine_when.questionSubText": {
    en: "Leave it empty if you don't remember",
  },
  "q01_1_flu_vaccine_when.inputLabel": {
    en: "Date",
  },
  "q01_2_flu_vaccine_previous_season.title": {
    en: "Have you received a flu vaccine for the previous season (2022)",
  },
  "q01_2_flu_vaccine_previous_season.yes": {
    en: "Yes",
  },
  "q01_2_flu_vaccine_previous_season.no": {
    en: "No",
  },
  "q02_covid_vaccine.title": {
    en: "Did you receive a COVID19 vaccine?",
  },
  "q02_covid_vaccine.yes": {
    en: "Yes",
  },
  "q02_covid_vaccine.no": {
    en: "No",
  },
  "q02_1_covid_vaccine_doses.title": {
    en: "How many doses of the Pfizer vaccine did you receive?",
  },
  "q02_1_covid_vaccine_doses.one_dose": {
    en: "One dose",
  },
  "q02_1_covid_vaccine_doses.two_doses": {
    en: "Two doses",
  },
  "q02_1_covid_vaccine_doses.three_doses": {
    en: "Three doses",
  },
  "q02_1_covid_vaccine_doses.four_doses": {
    en: "Four doses",
  },
  "q02_1_covid_vaccine_doses.five_doses": {
    en: "Five doses",
  },
  "q02_2a_covid_vaccine_first_dose.title": {
    en: "Please select which vaccine did you receive for the first dose and when you received it",
  },
  covid_vaccine_doses_date_validation: {
    en: "Please make sure vaccine dates are ordered correctly",
  },
  "q02_2a_covid_vaccine_first_dose.pfizer": {
    en: "Pfizer",
  },
  "q02_2a_covid_vaccine_first_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q02_2b_covid_vaccine_second_dose.title": {
    en: "Please select which vaccine did you receive for the second dose and when you received it",
  },
  "q02_2b_covid_vaccine_second_dose.pfizer": {
    en: "Pfizer",
  },
  "q02_2b_covid_vaccine_second_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q02_2c_covid_vaccine_third_dose.title": {
    en: "Please select which vaccine did you receive for the third dose and when you received it",
  },
  "q02_2c_covid_vaccine_third_dose.pfizer": {
    en: "Pfizer",
  },
  "q02_2c_covid_vaccine_third_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q02_2d_covid_vaccine_fourth_dose.title": {
    en: "Please select which vaccine did you receive for the fourth dose and when you received it",
  },
  "q02_2d_covid_vaccine_fourth_dose.pfizer": {
    en: "Pfizer",
  },
  "q02_2d_covid_vaccine_fourth_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
  "q02_2e_covid_vaccine_fifth_dose.title": {
    en: "Please select which vaccine did you receive for the fifth dose and when you received it",
  },
  "q02_2e_covid_vaccine_fifth_dose.pfizer": {
    en: "Pfizer",
  },
  "q02_2e_covid_vaccine_fifth_dose.johnsonjohnson": {
    en: "Johnson & Johnson",
  },
};

export const strings = Object.fromEntries(
  Object.entries(s).map((value) => [value[0], new Map(Object.entries(value[1]))])
);
