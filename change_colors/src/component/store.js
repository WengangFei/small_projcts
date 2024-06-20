import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
