import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getPostsThunk= createAsyncThunk("Posts/getPost",async(id,thunkAPI)=>{
    
 const result=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(result.status!==200){
        return "not found"
    }
    else{
        return result.data
    }
 
})

export default getPostsThunk;