import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const GetExamThunk= createAsyncThunk("/exam",async(thunkAPI)=>{
    
 const result=await axios.get(`http://localhost:3004/questions`)
    if(result.status!==200){
        return "not found"
    }
    else{
        return result.data
    }
 
})

export default GetExamThunk;