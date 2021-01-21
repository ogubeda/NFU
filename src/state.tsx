import React, { createContext, useReducer } from "react";

let AppContext = createContext(null);

const initialState = {
    username: "",
    email: ""
}


let reducer = (state, action) => {
  switch(action.type) {
    case "setUsername": {
        return { ...state, username: action.username }
    }
    case "setEmail": {
        return { ...state, email: action.email}
    }
  }
  return state;
};

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  }

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };


  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };