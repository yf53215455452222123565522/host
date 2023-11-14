
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategoriesProducts=createAsyncThunk(
    'categoriesProducts/fetchCategoriesProducts',
    async ()=>{
        try{
            const response= await axios.get("http://localhost:9000/categoryProducts");
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const fetchCategoryProducts=createAsyncThunk(
    'categoriesProducts/fetchCategoryProducts',
    async (id)=>{
        try{
            const response= await axios.get("http://localhost:9000/categoryProducts/"+id.toString());
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const categoryProduct = createSlice({
    name:"categoriesProducts",
    initialState:{
        data:[],
        category:null,
        status:null,
        message:''

    },
    extraReducers:{
        [fetchCategoriesProducts.fulfilled]:(state,action)=>{
            
            state.data=action.payload;
            state.status="success";
        },
        [fetchCategoryProducts.fulfilled]:(state,action)=>{
       
                
            
            state.category=action.payload;
            state.status="success";
        },
        [fetchCategoriesProducts.pending]:(state)=>{
            state.status="loading";
        },
        [fetchCategoryProducts.pending]:(state)=>{
            state.status="loading";
        },[fetchCategoriesProducts.rejected]:(state,action)=>{
            state.status="failed";
            
            state.message=action.error.message;
        },
        [fetchCategoryProducts.rejected]:(state,action)=>{
            state.status="failedCategory";
           
            state.message=action.error.message;
        },

    }
})  
export default categoryProduct.reducer;

