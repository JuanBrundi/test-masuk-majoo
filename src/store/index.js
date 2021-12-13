import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const middlewares = applyMiddleware(thunk);

export default createStore(rootReducer, middlewares);