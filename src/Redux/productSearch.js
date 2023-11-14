import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductByName=createAsyncThunk(
    'products/fetchProductByName',
    async (name)=>{
        try{
            const response= await axios.get("http://localhost:9000/products/name?name="+name.toString());
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)


export const productsSearch=createSlice({
    name:"productSearch",
    initialState:{
        data:[],
   
        
        status:null,
        message:''
    },
    reducers:{


    },
    extraReducers:{
       
        [fetchProductByName.fulfilled]:(state,action)=>{
            state.data=action.payload;
            state.status="success";
        },
        [fetchProductByName.pending]:(state)=>{
            state.status="loading";
        },
        [fetchProductByName.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        

    }
});
export default productsSearch.reducer;