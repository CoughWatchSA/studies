const s = {
  name: {
    en: "Intake Questionnaire",
  },
  description: {
    en: "",
  },
  duration: {
    en: "Duration 5-10 minutes",
  },
  "q01_age.title": {
    en: "How old are you?",
  },
  "q01_age.inputLabel": {
    en: "Please enter your age in years",
  },
  "q01_age.validation.age": {
    en: "Age must be a number between 0 and 120",
  },
  "q02_gender.title": {
    en: "What best describes your gender?",
  },
  "q02_gender.man": {
    en: "Man",
  },
  "q02_gender.woman": {
    en: "Woman",
  },
  "q02_gender.prefer_not_to_say": {
    en: "Prefer not to say",
  },
  "q02_gender.prefer_to_self_describe": {
    en: "Prefer to self-describe: ",
  },
  "q02_gender.validation.gender_input": {
    en: "Please self-describe your gender",
  },
  "q03_postal_code.title": {
    en: "What is your residential postal code?",
  },
  "q03_postal_code.inputLabel": {
    en: "Postal Code: ",
  },
  "q03_postal_code.validation.postal_code": {
    en: "A valid postal code is composed of four digits number",
  },
  "q04_province.title": {
    en: "In which province do you live in?",
  },
  "q04_province.gauteng": {
    en: "Gauteng",
  },
  "q04_province.kwazulu_natal": {
    en: "KwaZulu Natal",
  },
  "q04_province.free_state": {
    en: "Free State",
  },
  "q04_province.north_west": {
    en: "North West",
  },
  "q04_province.western_cape": {
    en: "Western Cape",
  },
  "q04_province.eastern_cape": {
    en: "Eastern Cape",
  },
  "q04_province.northern_cape": {
    en: "Northern Cape",
  },
  "q04_province.limpopo": {
    en: "Limpopo",
  },
  "q04_province.mpumalanga": {
    en: "Mpumalanga",
  },
  "q05_education.title": {
    en: "What is your highest education level?",
  },
  "q05_education.diploma_degree_postgraduate": {
    en: "Diploma/Degree/Postgraduate",
  },
  "q05_education.matric_certificate": {
    en: "Matric Certificate",
  },
  "q05_education.primary_to_high_school": {
    en: "Primary to high school",
  },
  "q05_education.no_formal_schooling": {
    en: "No formal schooling",
  },
  "q06_employment.title": {
    en: "Are you employed or earning income from self-employment?",
  },
  "q06_employment.yes": {
    en: "Yes",
  },
  "q06_employment.no": {
    en: "No",
  },
  "q07_health_care_worker.title": {
    en: "Are you a health care worker?",
  },
  "q07_health_care_worker.yes": {
    en: "Yes",
  },
  "q07_health_care_worker.no": {
    en: "No",
  },
  "q08_educator.title": {
    en: "Are you an educator?",
  },
  "q08_educator.yes": {
    en: "Yes",
  },
  "q08_educator.no": {
    en: "No",
  },
  "q09_weekly_contacts.title": {
    en: "Please indicate on average, how many people do you come in contact with per week day at your workplace or school",
  },
  "q09_weekly_contacts.less_than_five_people": {
    en: "Less than 5 people",
  },
  "q09_weekly_contacts.six_to_ten_people": {
    en: "6 to 10 people",
  },
  "q09_weekly_contacts.more_than_ten_people": {
    en: "More than 10 people",
  },
  "q09_weekly_contacts.none": {
    en: "None",
  },
  "q10_public_transport.title": {
    en: "Do you use public transport?",
  },
  "q10_public_transport.yes": {
    en: "Yes",
  },
  "q10_public_transport.no": {
    en: "No",
  },
  "q10_1a_public_transport_morning.title": {
    en: "Please indicate on average how many hours do you spend on public transport in the morning",
  },
  "q10_1a_public_transport_morning.sliderLabel": {
    en: "Morning: ",
  },
  "q10_1a_public_transport_morning.noResponseLabel": {
    en: "Slide the blue circle to the appropriate time frame. Extreme left is 0 hours and extreme right is 6 hours",
  },
  "q10_1b_public_transport_afternoon.title": {
    en: "Please indicate on average how many hours do you spend on public transport in the afternoon",
  },
  "q10_1b_public_transport_afternoon.sliderLabel": {
    en: "Afternoon: ",
  },
  "q10_1b_public_transport_afternoon.noResponseLabel": {
    en: "Slide the blue circle to the appropriate time frame. Extreme left is 0 hours and extreme right is 6 hours",
  },
  "q11_people_household.title": {
    en: "How many people live in your household?",
  },
  "q11_people_household.live_alone": {
    en: "Live alone",
  },
  "q11_people_household.two_people": {
    en: "2 people",
  },
  "q11_people_household.three_people": {
    en: "3 people",
  },
  "q11_people_household.four_people": {
    en: "4 people",
  },
  "q11_people_household.five_people": {
    en: "5 people",
  },
  "q11_people_household.six_people": {
    en: "6 people",
  },
  "q11_people_household.seven_people": {
    en: "7 people",
  },
  "q11_people_household.eight_people": {
    en: "8 people",
  },
  "q11_people_household.nine_people": {
    en: "9 people",
  },
  "q11_people_household.ten_or_more_people": {
    en: "10 or more people",
  },
  "q12_rooms_sleeping.title": {
    en: "How many rooms are used for sleeping?",
  },
  "q12_rooms_sleeping.one_bedroom": {
    en: "1 bedroom",
  },
  "q12_rooms_sleeping.two_bedrooms": {
    en: "2 bedrooms",
  },
  "q12_rooms_sleeping.three_bedrooms": {
    en: "3 bedrooms",
  },
  "q12_rooms_sleeping.four_bedrooms": {
    en: "4 bedrooms",
  },
  "q12_rooms_sleeping.five_bedrooms": {
    en: "5 bedrooms",
  },
  "q12_rooms_sleeping.six_or_more_bedrooms": {
    en: "6 or more bedrooms",
  },
  "q13_alcohol.title": {
    en: "Do you consume alcohol?",
  },
  "q13_alcohol.yes": {
    en: "Yes",
  },
  "q13_alcohol.no": {
    en: "No",
  },
  "q14_tobacco.title": {
    en: "Do you smoke any tobacco products?",
  },
  "q14_tobacco.yes": {
    en: "Yes",
  },
  "q14_tobacco.no": {
    en: "No",
  },
  "q15_comorbidities.title": {
    en: "Do you have any of the following comorbidities (underlying medical illness)?",
  },
  "q15_comorbidities.chronic_cardiac_diseases": {
    en: "Chronic cardiac diseases",
  },
  "q15_comorbidities.hypertension": {
    en: "Hypertension",
  },
  "q15_comorbidities.chronic_pulmonary_disease": {
    en: "Chronic pulmonary disease (not ashtma)",
  },
  "q15_comorbidities.ashtma": {
    en: "Ashtma (physician diagnosed)",
  },
  "q15_comorbidities.tuberculosis_pulmonary": {
    en: "Tuberculosis (pulmonary)",
  },
  "q15_comorbidities.tuberculosis_extra_pulmonary": {
    en: "Tuberculosis (extra pulmonary)",
  },
  "q15_comorbidities.chronic_kidney_disease": {
    en: "Chronic kidney disease",
  },
  "q15_comorbidities.liver_disease": {
    en: "Liver disease",
  },
  "q15_comorbidities.chronic_neurological_disorder": {
    en: "Chronic neurological disorder",
  },
  "q15_comorbidities.malignant_neoplasm": {
    en: "Malignant neoplasm (cancer)",
  },
  "q15_comorbidities.chronic_hematologic_disease": {
    en: "Chronic hematologic disease",
  },
  "q15_comorbidities.obesity": {
    en: "Obesity (BMI > 30)",
  },
  "q15_comorbidities.diabetes": {
    en: "Diabetes",
  },
  "q15_comorbidities.rheumatologic_disorder": {
    en: "Rheumatologic disorder",
  },
  "q15_comorbidities.dementia": {
    en: "Dementia",
  },
  "q15_comorbidities.immunosuppressive_therapy": {
    en: "Immunosuppressive therapy",
  },
  "q15_comorbidities.other": {
    en: "Other: ",
  },
  "q16_healthcare_sector.title": {
    en: "In what sector do you usually obtain healthcare?",
  },
  "q16_healthcare_sector.private": {
    en: "Private",
  },
  "q16_healthcare_sector.public": {
    en: "Public",
  },
  "q16_healthcare_sector.both": {
    en: "Both",
  },
};

export const strings = Object.fromEntries(
  Object.entries(s).map((value) => [value[0], new Map(Object.entries(value[1]))])
);
