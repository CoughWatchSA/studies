import { SurveyEngine } from "case-editor-tools/surveys";
import { Survey } from "../../../../common/types";
import { strings } from "./data/strings";
import { Q01_FluVaccine } from "./questions/q01_flu_vaccine";
import { Q02_FluVaccineWhen } from "./questions/q02_flu_vaccine_when";
import { Q03_FluVaccinePreviousSeason } from "./questions/q03_flu_vaccine_previous_season";
import { Q04_CovidVaccine } from "./questions/q04_covid_vaccine";
import { Q05_CovidVaccineDoses } from "./questions/q05_covid_vaccine_doses";
import { Q11_CovidVaccineBooster } from "./questions/q11_covid_vaccine_booster";
import { Q12_CovidVaccineBoosterType } from "./questions/q12_covid_vaccine_booster_type";
import { Q06_CovidVaccine_First_Dose } from "./questions/q06_covid_vaccine_first_dose";
import { Q07_CovidVaccine_Second_Dose } from "./questions/q07_covid_vaccine_second_dose";
import { Q08_CovidVaccine_Third_Dose } from "./questions/q08_covid_vaccine_third_dose";
import { Q09_CovidVaccine_Fourth_Dose } from "./questions/q09_covid_vaccine_fourth_dose";
import { Q10_CovidVaccine_Fifth_Dose } from "./questions/q10_covid_vaccine_fifth_dose";

export class Vaccination extends Survey {
  static surveyKey = "vaccination";

  constructor() {
    super(Vaccination.surveyKey, strings);
  }

  buildSurvey() {
    const q01_flu_vaccine = this.addQuestion(Q01_FluVaccine);

    this.addQuestion(
      Q02_FluVaccineWhen,
      SurveyEngine.singleChoice.any(q01_flu_vaccine.key, Q01_FluVaccine.Responses.Yes.value)
    );

    this.addQuestion(Q03_FluVaccinePreviousSeason);

    const q04_covid_vaccine = this.addQuestion(Q04_CovidVaccine);

    const q05_covid_vaccine_doses = this.addQuestion(
      Q05_CovidVaccineDoses,
      SurveyEngine.singleChoice.any(q04_covid_vaccine.key, Q04_CovidVaccine.Responses.Yes.value)
    );

    this.addQuestion(
      Q06_CovidVaccine_First_Dose,
      SurveyEngine.singleChoice.any(
        q05_covid_vaccine_doses.key,
        Q05_CovidVaccineDoses.Responses.OneDose.value,
        Q05_CovidVaccineDoses.Responses.TwoDoses.value,
        Q05_CovidVaccineDoses.Responses.ThreeDoses.value,
        Q05_CovidVaccineDoses.Responses.FourDoses.value,
        Q05_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    this.addQuestion(
      Q07_CovidVaccine_Second_Dose,
      SurveyEngine.singleChoice.any(
        q05_covid_vaccine_doses.key,
        Q05_CovidVaccineDoses.Responses.TwoDoses.value,
        Q05_CovidVaccineDoses.Responses.ThreeDoses.value,
        Q05_CovidVaccineDoses.Responses.FourDoses.value,
        Q05_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    this.addQuestion(
      Q08_CovidVaccine_Third_Dose,
      SurveyEngine.singleChoice.any(
        q05_covid_vaccine_doses.key,
        Q05_CovidVaccineDoses.Responses.ThreeDoses.value,
        Q05_CovidVaccineDoses.Responses.FourDoses.value,
        Q05_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    this.addQuestion(
      Q09_CovidVaccine_Fourth_Dose,
      SurveyEngine.singleChoice.any(
        q05_covid_vaccine_doses.key,
        Q05_CovidVaccineDoses.Responses.FourDoses.value,
        Q05_CovidVaccineDoses.Responses.FiveDoses.value
      )
    );

    this.addQuestion(
      Q10_CovidVaccine_Fifth_Dose,
      SurveyEngine.singleChoice.any(q05_covid_vaccine_doses.key, Q05_CovidVaccineDoses.Responses.FiveDoses.value)
    );

    const q11_covid_vaccine_booster = this.addQuestion(
      Q11_CovidVaccineBooster,
      SurveyEngine.logic.and(
        SurveyEngine.singleChoice.any(
          q05_covid_vaccine_doses.key,
          Q05_CovidVaccineDoses.Responses.OneDose.value,
          Q05_CovidVaccineDoses.Responses.TwoDoses.value,
          Q05_CovidVaccineDoses.Responses.ThreeDoses.value,
          Q05_CovidVaccineDoses.Responses.FourDoses.value,
          Q05_CovidVaccineDoses.Responses.FiveDoses.value
        ),
        SurveyEngine.singleChoice.any(q04_covid_vaccine.key, Q04_CovidVaccine.Responses.Yes.value)
      )
    );

    this.addQuestion(
      Q12_CovidVaccineBoosterType,
      SurveyEngine.singleChoice.any(q11_covid_vaccine_booster.key, Q11_CovidVaccineBooster.Responses.Yes.value)
    );
  }
}
