import { shoeArr } from "../../../Ex_Shoe/data";
import { VIEW_DETAIL } from "../../Constances/constance_shoe";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export default shoeReducer_1 = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
  }
};
