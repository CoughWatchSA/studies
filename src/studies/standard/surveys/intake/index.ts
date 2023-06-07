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
import { Q11_PublicTransportMorning } from "./questions/q11_public_transport_morning";
import { Q12_PublicTransportAfternoon } from "./questions/q12_public_transport_afternoon";
import { Q13_PeopleHousehold } from "./questions/q13_people_household";
import { Q14_RoomsSleeping } from "./questions/q14_rooms_sleeping";
import { Q15_Alcohol } from "./questions/q15_alcohol";
import { Q16_Tobacco } from "./questions/q16_tobacco";
import { Q17_Comorbidities } from "./questions/q17_comorbidities";
import { Q18_HealthcareSector } from "./questions/q18_healthcare_sector";
import { numericInputResponseKey } from "../../../../common/constants";

export class Intake extends Survey {
  static surveyKey = "intake";

  constructor() {
    super(Intake.surveyKey, strings);
  }

  buildSurvey() {
    const q01_age = this.addQuestion(Q01_Age);

    this.addQuestion(Q02_Gender);

    this.addQuestion(Q03_Postal_Code);

    this.addQuestion(Q04_Province);

    this.addQuestion(Q05_Education);

    this.addQuestion(
      Q06_Employment,
      SurveyEngine.compare.gte(
        SurveyEngine.getResponseValueAsNum(
          q01_age.key,
          numericInputResponseKey
        ),
        18
      )
    );

    this.addQuestion(
      Q07_HealthCareWorker,
      SurveyEngine.compare.gte(
        SurveyEngine.getResponseValueAsNum(
          q01_age.key,
          numericInputResponseKey
        ),
        18
      )
    );

    this.addQuestion(
      Q08_Educator,
      SurveyEngine.compare.gte(
        SurveyEngine.getResponseValueAsNum(
          q01_age.key,
          numericInputResponseKey
        ),
        18
      )
    );

    this.addQuestion(Q09_WeeklyContacts);

    const q10_public_transport = this.addQuestion(Q10_PublicTransport);

    this.addQuestion(
      Q11_PublicTransportMorning,
      SurveyEngine.singleChoice.any(
        q10_public_transport.key,
        Q10_PublicTransport.Responses.Yes.value
      )
    );

    this.addQuestion(
      Q12_PublicTransportAfternoon,
      SurveyEngine.singleChoice.any(
        q10_public_transport.key,
        Q10_PublicTransport.Responses.Yes.value
      )
    );

    this.addQuestion(Q13_PeopleHousehold);

    this.addQuestion(Q14_RoomsSleeping);

    this.addQuestion(Q15_Alcohol);

    this.addQuestion(Q16_Tobacco);

    this.addQuestion(Q17_Comorbidities);

    this.addQuestion(Q18_HealthcareSector);
  }
}
