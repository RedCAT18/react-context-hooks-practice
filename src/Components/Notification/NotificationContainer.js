import React, { useState } from "react";
import NotificationPresenter from "./NotificationPresenter";

const NotificationContainer = props => {
  const [state] = useState();
  return <NotificationPresenter {...props} {...state} />;
};

export default NotificationContainer;
