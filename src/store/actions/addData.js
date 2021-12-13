import {
  FULFILLED,

  CREATE_NEW_LIST
} from "../../constant";

export const createNewList = (newList) => {
  return (dispatch) => dispatch({ type: `${FULFILLED}${CREATE_NEW_LIST}`, payload: newList });
};