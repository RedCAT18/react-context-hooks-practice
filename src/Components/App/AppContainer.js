import React from "react";
import AppPresenter from "./AppPresenter";
import { AppContextProvider } from "../../store";

const AppContainer = () => {
  return (
    <AppContextProvider>
      <AppPresenter />
    </AppContextProvider>
  );
};

export default AppContainer;
