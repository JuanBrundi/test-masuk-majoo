import {
  PENDING,
  FULFILLED,
  FAILED,

  GET_TODO_LIST,
  CREATE_NEW_LIST,
  REMOVE_TODO_LIST,
  GET_LIST_BY_ID,
  EDIT_TODO
} from "../../constant/actions";

const initialState = {
  loading: false,
  error: false,
  data: [],
  finishedList: [],
  unfinishedList: [],
  editedData: []
}

const divideListByStatus = (dataList = []) => {
  const finishedList = []
  const unfinishedList = []

  dataList?.forEach(list => {
    if (list?.status === 1) {
      finishedList.push(list)
    } else if (list?.status === 0) {
      unfinishedList.push(list)
    }
  })

  return {
    finishedList,
    unfinishedList
  }
}

export default function todoList(state = initialState, action) {
  switch (action.type) {
    //FETCH ALL TODO LIST
    case `${PENDING}${GET_TODO_LIST}`:
      return {
        ...state,
        loading: true,
        error: null,
        finishedList: [],
        unfinishedList: [],
        data: [],
        editedData: []
      }
    case `${FULFILLED}${GET_TODO_LIST}`: {
      const {
        finishedList,
        unfinishedList
      } = divideListByStatus(action.payload);

      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        finishedList,
        unfinishedList,
        editedData: []
      }
    }
    case `${FAILED}${GET_TODO_LIST}`:
      return {
        ...state,
        loading: false,
        error: action.error,
        finishedList: [],
        unfinishedList: [],
        data: [],
        editedData: []
      }

    //CREATE NEW TODO LIST
    case `${FULFILLED}${CREATE_NEW_LIST}`: {
      const newData = [...state.data, action.payload]
      const {
        finishedList,
        unfinishedList
      } = divideListByStatus(newData);

      return {
        ...state,
        loading: false,
        error: null,
        data: newData,
        finishedList,
        unfinishedList,
        editedData: []
      }
    }

    //GET ONE TODO
    case `${FULFILLED}${GET_LIST_BY_ID}`: {
      const editedData = state.data?.filter(list => list.id === action.payload)

      return {
        ...state,
        loading: false,
        error: null,
        editedData: editedData || []
      }
    }

    //REMOVE ONE TODO
    case `${FULFILLED}${REMOVE_TODO_LIST}`: {
      const newData = state.data?.filter(list => list.id !== action.payload)

      const {
        finishedList,
        unfinishedList
      } = divideListByStatus(newData);

      return {
        ...state,
        loading: false,
        error: null,
        data: newData,
        finishedList,
        unfinishedList,
        editedData: []
      }
    }

    //EDIT ONE TODO
    case `${FULFILLED}${EDIT_TODO}`: {
      const { id, title, description, status } = action.payload || {}
      const newData = state.data?.map(list => {
        if (list.id === id) {
          return {
            ...list,
            title,
            description,
            status
          }
        }
        return list
      })

      const {
        finishedList,
        unfinishedList
      } = divideListByStatus(newData);

      return {
        ...state,
        loading: false,
        error: null,
        data: newData,
        finishedList,
        unfinishedList,
        editedData: []
      }
    }

    default:
      return state;
  }
}