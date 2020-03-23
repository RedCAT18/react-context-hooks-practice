import React, { useContext } from "react";

import Header from "../Header/";
import Notification from "../Notification";
import Flex from "styled-flex-component";

import { AppContext } from "../../store";

const AppPresenter = () => {
  const [state] = useContext(AppContext);
  const { notifications } = state;

  const renderNotification = notifications => {
    return Object.keys(notifications).map(key => {
      return (
        <Notification
          key={notifications[key].id}
          id={notifications[key].id}
          text={notifications[key].text}
          seen={notifications[key].seen}
        />
      );
    });
  };

  return (
    <>
      <Header />
      <Flex alignCenter full column>
        {renderNotification(notifications)}
      </Flex>
    </>
  );
};

export default AppPresenter;
