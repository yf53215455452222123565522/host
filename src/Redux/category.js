import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Category from "../model/Category";
export const fetchCategories=createAsyncThunk(
    'categories/fetchCategories',
    async ()=>{
        try{
            const response= await axios.get("http://localhost:9000/categories");
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const deleteCategory=createAsyncThunk(
    "categories/deleteCategories",
    async(id)=>{
        try{
            const response=await axios.delete("http://localhost:9000/categories/"+id.toString());
            return response.data
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const fetchCategory=createAsyncThunk(
    'categories/fetchCategories',
    async (id)=>{
        try{
            const response= await axios.get("http://localhost:9000/categories/"+id.toString());
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const addCategory=createAsyncThunk(
    'categories/addCategories',
    async (data)=>{
        try{
            const category=new Category(data.id,data.name,data.image,data.bannerImage);

                console.log(data)
            //add cast to class
            const response= await axios.post("http://localhost:9000/categories",category,
            {
                Headers:{             
                    'Content-Type': 'application/json',
                    "Authorization":data.user
                }
            }
            );
            return response.data;
        }catch(error){
            throw new Error(error.message);
        }
        
    }
)
export const updateCategory=createAsyncThunk(
    "categories/updateCategories",
    async (data)=>{
        try{
            const category=new Category(data.idCategory,data.updatedCategory.name,data.updatedCategory.image,data.updatedCategory.bannerImage);
        
        const response=await axios.put("http://localhost:9000/categories/"+data.idCategory.toString(),category,
        {
            Headers:{             
                'Content-Type': 'application/json',
                "Authorization":data.user
            }
        }
        );
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const categoriesSlice=createSlice({
    name:"categories",
    initialState:{
        data:[],
        status:null,
        message:''
    },
    reducers:{


    },
    extraReducers:{
        [addCategory.fulfilled]:(state,action)=>{
            state.data.push(action.payload);
            state.status="success";
        },
        [updateCategory.fulfilled]:(state,action)=>{
            const index=state.findIndex(category=>category.id===action.payload.id);
            state.data[index]={
                ...state.data[index],
                ...action.payload,
            };
            state.status="success";
        },
        [fetchCategories.fulfilled]:(state,action)=>{
            state.data=action.payload;
            state.status="success";
        },
        [fetchCategory.fulfilled]:(state,action)=>{
            state.data=action.payload;
            state.status="success";
        },
        [deleteCategory.fulfilled]:(state,action)=>{
            // arr = arr.filter(item => item !== value)
            state.data=state.data.filter(item=>item.id!==action.payload);
            state.status="success";
        },
        [fetchCategories.pending]:(state)=>{
            state.status="loading";
        },
        [deleteCategory.pending]:(state)=>{
            state.status="loading";
        },
        [fetchCategory.pending]:(state)=>{
            state.status="loading";
        },
        [addCategory.pending]:(state)=>{
            state.status="loading";
        },
        [updateCategory.pending]:(state)=>{
            state.status="loading";
        },
        [fetchCategories.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        [fetchCategory.rejected]:(state,action)=>{
            state.status="failed";
        
            state.message=action.error.message;
        },
        [deleteCategory.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        [addCategory.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        [updateCategory.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        }

    }
});
export default categoriesSlice.reducer;