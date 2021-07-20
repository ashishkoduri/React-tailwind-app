import React from "react";

import { StoreProvider } from "../store";
import reducers from "../reducers";
import initialState from "../store/initialState";

//import Todo from "../pages/todo";
import App from "../App";

export default function index() {
  <StoreProvider initialState={initialState} reducer={reducers}>
    <App />
  </StoreProvider>
};
