// Esta es una forma utilizando React Context API para hacer la data layer

import React, { createContext, useContext, useReducer } from "react";

// Esta es la Data Layer
export const StateContext = createContext()

// Este es el proveedor

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>    
);

// Como usarlo dentro de un componente

export const useStateValue = () => useContext(StateContext)