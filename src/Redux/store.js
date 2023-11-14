

import { createStore } from "redux";
import { combineReducers } from "redux";

import apiReducer from "./api/apiReducer";
import interfaceReducer from "./interface/interfaceReducer";

import { composeWithDevTools } from "redux-devtools-extension";

import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  api: apiReducer,
  interface: interfaceReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, composeWithDevTools(thunk));

export default store;

// console.log(store);

