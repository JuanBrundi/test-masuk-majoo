import {
  FULFILLED,

  REMOVE_TODO_LIST
} from "../../constant";

export const removeList = (listId) => {
  return (dispatch) => dispatch({ type: `${FULFILLED}${REMOVE_TODO_LIST}`, payload: listId });
};