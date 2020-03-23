import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  notifications: {
    "1": {
      id: 1,
      text: "Something",
      seen: false
    },
    "2": {
      id: 2,
      text: "Something else",
      seen: false
    },
    "3": {
      id: 3,
      text: "Another one",
      seen: false
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEE_NOTIFICATION":
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload]: {
            ...state.notifications[action.payload],
            seen: true
          }
        }
      };
    case "DEL_NOTIFICATION":
      delete state.notifications[action.payload];
      return { ...state };
    default:
      throw new Error();
  }
};

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
