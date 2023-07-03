import { SurveyEngine } from "case-editor-tools/surveys";
import { Expression, ItemGroupComponent, SurveySingleItem } from "survey-engine/data_types";

export const responses = {
  getAttributeAt: (exp: Expression, path: string) => {
    const getAttribute = (exp: Expression, name: string): Expression => ({
      name: "getAttribute",
      data: [
        { dtype: "exp", exp: exp },
        { dtype: "str", str: name },
      ],
    });

    return path.split(".").reduce((prev, cur) => getAttribute(prev, cur), exp);
  },

  getResponses: (item: SurveySingleItem) => {
    return SurveyEngine.getters.getObjByHierarchicalKey(SurveyEngine.getters.getResponses(), item.key);
  },

  getValue: (item: SurveySingleItem) => {
    const isGroup = (item?.components?.items.find((i) => i.role === "responseGroup") as ItemGroupComponent)?.items.find(
      (i) => i.role.includes("Group")
    );
    const itemsFragment = isGroup ? "items.0.items.0" : "items.0";
    return SurveyEngine.parseValueAsNum(responses.getAttributeAt(responses.getResponses(item), `response.${itemsFragment}.value`));
  },
};