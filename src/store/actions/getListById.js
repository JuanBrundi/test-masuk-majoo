import {
  FULFILLED,

  GET_LIST_BY_ID
} from "../../constant";

export const getListById = (listId) => {
  return (dispatch) => dispatch({ type: `${FULFILLED}${GET_LIST_BY_ID}`, payload: listId });
};