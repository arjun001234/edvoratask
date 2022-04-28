import React from "react";
import { HANDLE_ERROR, LOAD_DATA } from "../../store/actions";
import { initailState, reducer } from "../../store/reducer";

export const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  
  const [state,dispatch] = React.useReducer(reducer,initailState)

  React.useEffect(() => {
    Promise.all([fetch("https://assessment.api.vweb.app/user").then(val => val.json()),fetch("https://assessment.api.vweb.app/rides").then(val => val.json())]).then(([user,rides]) => {
       dispatch({type: LOAD_DATA,payload: {
         rides,
         user
       }})
    }).catch(e => dispatch({type: HANDLE_ERROR}))
  },[]);

  return <AppContext.Provider value={{state,dispatch}}>{children}</AppContext.Provider>;
};

export default AppProvider;
