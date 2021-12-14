import {
  FULFILLED,

  EDIT_TODO
} from "../../constant";

export const editTodo = (newList) => {
  return (dispatch) => dispatch({ type: `${FULFILLED}${EDIT_TODO}`, payload: newList });
};