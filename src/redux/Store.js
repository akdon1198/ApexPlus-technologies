import { configureStore } from "@reduxjs/toolkit";
import ScenarioReducer from "./ScenarioSlice";

export const Store = configureStore({
    reducer:{
        scenario : ScenarioReducer
    }
})