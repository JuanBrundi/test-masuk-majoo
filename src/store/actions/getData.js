import {
  BASE_API,

  PENDING,
  FULFILLED,
  FAILED,

  GET_TODO_LIST
} from "../../constant";

import axios from "axios";

export const getData = () => {
  return (dispatch) => {
    dispatch({ type: `${PENDING}${GET_TODO_LIST}` });

    axios.get(BASE_API)
      .then(({ data, status }) => {
        dispatch({ type: `${FULFILLED}${GET_TODO_LIST}`, payload: data, status });
      })
      .catch(err => {
        dispatch({ type: `${FAILED}${GET_TODO_LIST}` });
      })
  }
};