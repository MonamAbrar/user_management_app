

import { createStore } from "redux";
import { combineReducers } from "redux";

import apiReducer from "./api/apiReducer";
import interfaceReducer from "./interface/interfaceReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  api: apiReducer,
  interface: interfaceReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

console.log(store);