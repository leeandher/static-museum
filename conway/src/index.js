import React from "react";
import { render } from "react-dom";

import "./styles/index.css";
import "antd/dist/antd.css";

import App from "./components/App";

import { Provider } from "react-redux";
import store from "./store";

const Conway = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Conway />, document.getElementById("root"));
