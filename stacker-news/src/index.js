import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { BackendProvider } from "./backend/context";

ReactDOM.render(
  <BrowserRouter>
    <BackendProvider>
      <App />
    </BackendProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
