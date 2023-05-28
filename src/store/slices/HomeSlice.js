import { createSlice } from "@reduxjs/toolkit"

const state = {
    name :"",
    email:""

}
const homeSlice = createSlice({
    name: "userInputs",
    initialState : state,
    reducers:{
        userName:(state,action)=>{
            state.name = action.payload
        },
        userEmail : (state, action)=>{
            state.email = action.payload
        }

    }
})

export const homeAction=homeSlice.actions
export const homeReducer= homeSlice.reducer