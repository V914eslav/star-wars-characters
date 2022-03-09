import {
  ADD_PERSON_TO_FAVORITE,
  REMOVE_PERSON_FROM_FAVORITE,
} from "@store/constants/actionTypes";
import { action } from "@storybook/addon-actions";

const initialState = "Hello";

const favoriteReducer = (state = initialState, acion) => {
  switch (acion.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
      break;
    case REMOVE_PERSON_FROM_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
export default favoriteReducer;
