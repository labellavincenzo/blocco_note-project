import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducers/noteReducer";

export const store =  configureStore({
    reducer: {
        note: noteReducer,  
    }
})