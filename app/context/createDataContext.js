import React, { useReducer } from "react";

export default (reducer, actions, defaultState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    //actions === {"addBlogPost" : {dispatch}=>{return()=>{}}}

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

//reuseable context for different data or states with reducer
