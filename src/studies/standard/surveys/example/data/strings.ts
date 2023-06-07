const s = {
  name: {
    en: "Survey name",
  },
  description: {
    en: "Survey description",
  },
  duration: {
    en: "Duration 5-10 minutes",
  },
  "q01_single_choice.title": {
    en: "Single choice question",
  },
  "q01_single_choice.zero": {
    en: "0",
  },
  "q01_single_choice.one": {
    en: "1",
  },
  "q01_single_choice.two": {
    en: "2",
  },
  "q01_single_choice.three": {
    en: "3",
  },
  "q01_single_choice.four_or_more": {
    en: "4 or more",
  },
  "q01_single_choice.open_question": {
    en: "Other",
  },
  "q02_numeric.title": {
    en: "Numeric",
  },
  "q02_numeric.inputLabel": {
    en: "number",
  },
  "q03_slider.title": {
    en: "Slider question",
  },
  "q03_slider.sliderLabel": {
    en: "slider",
  },
  "q03_slider.noResponseLabel": {
    en: "choose a number",
  },
};

export const strings = Object.fromEntries(
  Object.entries(s).map((value) => [
    value[0],
    new Map(Object.entries(value[1])),
  ])
);
