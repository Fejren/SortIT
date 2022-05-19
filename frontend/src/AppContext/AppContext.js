import {createContext} from "react";

export const defaultObject = {
  trashes: [],

};

export const AppContext = createContext(defaultObject)