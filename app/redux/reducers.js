import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../../reduxReducers/counterSlice";

export const rootReducer = combineReducers({ 
    counter: counterSlice,
});
