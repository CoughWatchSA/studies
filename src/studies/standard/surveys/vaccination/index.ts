import { SurveyEngine } from "case-editor-tools/surveys";
import { Survey } from "../../../../common/types";
import { strings } from "./data/strings";
import { Q01_FluVaccine } from "./questions/q01_flu_vaccine";
import { Q01_1_FluVaccineWhen } from "./questions/q01_1_flu_vaccine_when";
import { Q01_2_FluVaccinePreviousSeason } from "./questions/q01_2_flu_vaccine_previous_season";
import { Q02_CovidVaccine } from "./questions/q02_covid_vaccine";
import { Q02_1_CovidVaccineDoses } from "./questions/q02_1_covid_vaccine_doses";
import { Q02_2a_CovidVaccine_First_Dose } from "./questions/q02_2a_covid_vaccine_first_dose";
import { Q02_2b_CovidVaccine_Second_Dose } from "./questions/q02_2b_covid_vaccine_second_dose";
import { Q02_2c_CovidVaccine_Third_Dose } from "./questions/q02_2c_covid_vaccine_third_dose";
import { Q02_2d_CovidVaccine_Fourth_Dose } from "./questions/q02_2d_covid_vaccine_fourth_dose";
import { Q02_2e_CovidVaccine_Fifth_Dose } from "./questions/q02_2e_covid_vaccine_fifth_dose";

import * as helpers from "../../../../common/helpers";

class Vaccination extends Survey {
  static surveyKey = "vaccination";

  constructor() {
    super(Vaccination.surveyKey, strings);
  }

  buildSurvey() {
    const q01_flu_vaccine = this.addQuestion(Q01_FluVaccine);

    this.addQuestion(
      Q01_1_FluVaccineWhen,
      SurveyEngine.singleChoice.any(q01_flu_vaccine.key, Q01_FluVaccine.Responses.Yes.value)
    );

    this.addQuestion(Q01_2_FluVaccinePreviousSeason);

    this.addPageBreak();

    const q02_covid_vaccine = this.addQuestion(Q02_CovidVaccine);

    const q02_1_covid_vaccine_doses = this.addQuestion(
      Q02_1_CovidVaccineDoses,
      SurveyEngine.singleChoice.any(q02_covid_vaccine.key, Q02_CovidVaccine.Responses.Yes.value)
    );

    const q02_2a_covid_vaccine_first_dose = this.addQuestion(
      Q02_2a_CovidVaccine_First_Dose,
      SurveyEngine.singleChoice.any(
        q02_1_covid_vaccine_doses.key,
        Q02_1_CovidVaccineDoses.Responses.OneDose.value,
        Q02_1_CovidVaccineDoses.Responses.TwoDoses.value,
        Q02_1_CovidVaccineDoses.Responses.ThreeDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FourDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    const q02_2b_covid_vaccine_second_dose = this.addQuestion(
      Q02_2b_CovidVaccine_Second_Dose,
      SurveyEngine.singleChoice.any(
        q02_1_covid_vaccine_doses.key,
        Q02_1_CovidVaccineDoses.Responses.TwoDoses.value,
        Q02_1_CovidVaccineDoses.Responses.ThreeDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FourDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    const q02_2c_covid_vaccine_third_dose = this.addQuestion(
      Q02_2c_CovidVaccine_Third_Dose,
      SurveyEngine.singleChoice.any(
        q02_1_covid_vaccine_doses.key,
        Q02_1_CovidVaccineDoses.Responses.ThreeDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FourDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    const q02_2d_covid_vaccine_fourth_dose = this.addQuestion(
      Q02_2d_CovidVaccine_Fourth_Dose,
      SurveyEngine.singleChoice.any(
        q02_1_covid_vaccine_doses.key,
        Q02_1_CovidVaccineDoses.Responses.FourDoses.value,
        Q02_1_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    const q02_2e_covid_vaccine_fifth_dose = this.addQuestion(
      Q02_2e_CovidVaccine_Fifth_Dose,
      SurveyEngine.singleChoice.any(q02_1_covid_vaccine_doses.key, Q02_1_CovidVaccineDoses.Responses.FiveDoses.value)
    );

    const q02_2a_covid_vaccine_first_dose_validation = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      )
    );

    this.addValidation(
      q02_2a_covid_vaccine_first_dose,
      q02_2a_covid_vaccine_first_dose_validation,
      "q02_2a_covid_vaccine_first_dose_validation",
      strings["covid_vaccine_doses_date_validation"]
    );

    const q02_2b_covid_vaccine_second_dose_validation = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose),
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose),
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      )
    );

    this.addValidation(
      q02_2b_covid_vaccine_second_dose,
      q02_2b_covid_vaccine_second_dose_validation,
      "q02_2b_covid_vaccine_second_dose_validation",
      strings["covid_vaccine_doses_date_validation"]
    );

    const q02_2c_covid_vaccine_third_dose_validation = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose),
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose),
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      )
    );

    this.addValidation(
      q02_2c_covid_vaccine_third_dose,
      q02_2c_covid_vaccine_third_dose_validation,
      "q02_2c_covid_vaccine_third_dose_validation",
      strings["covid_vaccine_doses_date_validation"]
    );

    const q02_2d_covid_vaccine_fourth_dose_validation = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose),
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose),
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      )
    );

    this.addValidation(
      q02_2d_covid_vaccine_fourth_dose,
      q02_2d_covid_vaccine_fourth_dose_validation,
      "q02_2d_covid_vaccine_fourth_dose_validation",
      strings["covid_vaccine_doses_date_validation"]
    );

    const q02_2e_covid_vaccine_fifth_dose_validation = SurveyEngine.logic.and(
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2a_covid_vaccine_first_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2a_covid_vaccine_first_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2b_covid_vaccine_second_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2b_covid_vaccine_second_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2c_covid_vaccine_third_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2c_covid_vaccine_third_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      ),
      SurveyEngine.logic.or(
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose)),
        SurveyEngine.logic.not(helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)),
        SurveyEngine.compare.lt(
          helpers.responses.getValue(q02_2d_covid_vaccine_fourth_dose),
          helpers.responses.getValue(q02_2e_covid_vaccine_fifth_dose)
        )
      )
    );

    this.addValidation(
      q02_2e_covid_vaccine_fifth_dose,
      q02_2e_covid_vaccine_fifth_dose_validation,
      "q02_2e_covid_vaccine_fifth_dose_validation",
      strings["covid_vaccine_doses_date_validation"]
    );
  }
}

export const vaccination = new Vaccination();
