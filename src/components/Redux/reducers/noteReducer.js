import { createSlice } from "@reduxjs/toolkit";

//Definizione dello stato iniziale, in questo caso un array vuoto
const initialState = {
    note:[]
}

const noteSlice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        setNote: (state, action) => {
            state.note.push(action.payload) //Con payload aggiungo una nuova nota allo stato delle note
        }
    }
})


export const {setNote} = noteSlice.actions
export default noteSlice.reducer