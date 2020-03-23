import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import AppContainer from "./Components/App/";
import reset from "styled-reset";

createGlobalStyle`
  ${reset};
  body {
    background-color: #ecf0f1;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  rootElement
);
