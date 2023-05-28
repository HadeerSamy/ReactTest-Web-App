import { createSlice } from "@reduxjs/toolkit"
import GetExamThunk from "../Middleware/examMiddleware"
const state={

    exam:null,
    answer:"",
    correct:0,
    wrong:0,

}

const examSlice = createSlice({
    name:'questions',
    initialState:state,
    reducers:{
        examQuestions:(state,action)=>{
            state.exam=action.payload
        },
        answerFinal:(state,action)=>{
            state.answer=action.payload;

        },
        correctAnswer:(state,action)=>{
            state.correct=action.payload
        },
        wrongAnswer:(state,action)=>{
            state.wrong=action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetExamThunk.fulfilled, (state, action) => {
            state.exam = action.payload
        }).addCase(GetExamThunk.rejected, (state, action) => {

        })
    }
})

export const examsAction=examSlice.actions
export const examReducer= examSlice.reducer