import { createSlice } from "@reduxjs/toolkit"
import getPostsThunk from "../Middleware/detailedMiddle"

const state = {
    posts: [],
    liked:[],
    errorMessage:"",
    detailed:null
}

const postsSlice = createSlice({
    name: "Posts",
    initialState: state,
    reducers: {
        postLiked:(state, action)=>{
            state.posts=action.payload
        },
        onlyLiked:(state,action)=>{
            state.liked=action.payload
        },
        detailedPost:(state,action)=>{
            state.detailed=action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostsThunk.fulfilled, (state, action) => {
            state.detailed = action.payload
        }).addCase(getPostsThunk.rejected, (state, action) => {
            state.errorMessage = "Cant get specified post"
        })
    }


})
export const postsAction=postsSlice.actions
export const postReducer= postsSlice.reducer