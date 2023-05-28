

import { combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "../slices/PostSlice";
import { homeReducer } from "../slices/HomeSlice";
import { examReducer } from "../slices/ExamSlice";



export const rootReducer= combineReducers({

    postReducer: postReducer,
    HomeReducer:homeReducer,
    ExamReducer:examReducer
})