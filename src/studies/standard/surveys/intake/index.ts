import { SurveyEngine } from "case-editor-tools/surveys/survey-engine-expressions";
import { Survey } from "../../../../common/types";
import { strings } from "./data/strings";
import { Q01_Age } from "./questions/q01_age";
import { Q02_Gender } from "./questions/q02_gender";
import { Q03_Postal_Code } from "./questions/q03_postal_code";
import { Q04_Province } from "./questions/q04_province";
import { Q05_Education } from "./questions/q05_education";
import { Q06_Employment } from "./questions/q06_employment";
import { Q07_HealthCareWorker } from "./questions/q07_health_care_worker";
import { Q08_Educator } from "./questions/q08_educator";
import { Q09_WeeklyContacts } from "./questions/q09_weekly_contacts";
import { Q10_PublicTransport } from "./questions/q10_public_transport";
import { Q10_1a_PublicTransportMorning } from "./questions/q10_1a_public_transport_morning";
import { Q10_1b_PublicTransportAfternoon } from "./questions/q10_1b_public_transport_afternoon";
import { Q11_PeopleHousehold } from "./questions/q11_people_household";
import { Q12_RoomsSleeping } from "./questions/q12_rooms_sleeping";
import { Q13_Alcohol } from "./questions/q13_alcohol";
import { Q14_Tobacco } from "./questions/q14_tobacco";
import { Q15_Comorbidities } from "./questions/q15_comorbidities";
import { Q16_HealthcareSector } from "./questions/q16_healthcare_sector";
import { fullAge, numericInputResponseKey } from "../../../../common/constants";
import { SurveyItem } from "survey-engine/data_types";

class Intake extends Survey {
  static surveyKey = "intake";

  q03_postal_code: SurveyItem;

  constructor() {
    super(Intake.surveyKey, strings);

    this.q03_postal_code = this.buildQuestion(Q03_Postal_Code);
  }

  buildSurvey() {
    const q01_age = this.addQuestion(Q01_Age);

    this.addQuestion(Q02_Gender);

    this.addItem(this.q03_postal_code);

    this.addQuestion(Q04_Province);

    this.addPageBreak();

    this.addQuestion(Q05_Education);

    this.addQuestion(
      Q06_Employment,
      SurveyEngine.compare.gte(SurveyEngine.getResponseValueAsNum(q01_age.key, numericInputResponseKey), fullAge)
    );

    this.addQuestion(
      Q07_HealthCareWorker,
      SurveyEngine.compare.gte(SurveyEngine.getResponseValueAsNum(q01_age.key, numericInputResponseKey), fullAge)
    );

    this.addQuestion(
      Q08_Educator,
      SurveyEngine.compare.gte(SurveyEngine.getResponseValueAsNum(q01_age.key, numericInputResponseKey), fullAge)
    );

    this.addPageBreak();

    this.addQuestion(Q09_WeeklyContacts);

    const q10_public_transport = this.addQuestion(Q10_PublicTransport);

    this.addQuestion(
      Q10_1a_PublicTransportMorning,
      SurveyEngine.singleChoice.any(q10_public_transport.key, Q10_PublicTransport.Responses.Yes.value)
    );

    this.addQuestion(
      Q10_1b_PublicTransportAfternoon,
      SurveyEngine.singleChoice.any(q10_public_transport.key, Q10_PublicTransport.Responses.Yes.value)
    );

    this.addQuestion(Q11_PeopleHousehold);

    this.addQuestion(Q12_RoomsSleeping);

    this.addQuestion(
      Q13_Alcohol,
      SurveyEngine.compare.gte(SurveyEngine.getResponseValueAsNum(q01_age.key, numericInputResponseKey), fullAge)
    );

    this.addQuestion(
      Q14_Tobacco,
      SurveyEngine.compare.gte(SurveyEngine.getResponseValueAsNum(q01_age.key, numericInputResponseKey), fullAge)
    );

    this.addPageBreak();

    this.addQuestion(Q15_Comorbidities);

    this.addQuestion(Q16_HealthcareSector);
  }
}

export const intake = new Intake();
