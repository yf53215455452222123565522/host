import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../model/Product";
import Reduction from "../model/Reduction";
export const fetchProduct=createAsyncThunk(
    'products/fetchProduct',
    async (id)=>{
        try{
            const response= await axios.get("http://localhost:9000/products/"+id.toString());
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)

export const addProduct=createAsyncThunk(
    "products/addProducts",
    async(data)=>{
        try{
            const images=[data.images1,data.images2,data.images3]
            const product=new Product(data.id,data.name,data.marque,data.image,data.description,parseInt(data.quantity),parseInt(data.Ordredquantity),images,data.unitQuantity,parseFloat(data.reduction),parseFloat(data.previousPrice),parseFloat(data.price),JSON.parse(data.category));
            const response=await axios.post("http://localhost:9000/products",product,
            {
                Headers:{             
                    'Content-Type': 'application/json',
                    "Authorization":data.user
                }
            });
            return response.data
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const deleteProduct=createAsyncThunk(
    "products/deleteProducts",
    async(id)=>{
        try{
            const response=await axios.delete("http://localhost:9000/products/"+id.toString());
            return response.data
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const setReduction = createAsyncThunk(
    "products/setReduction",
    async(data)=>{
        try{
            const reduction=new Reduction(data.idProduct,data.updatedCategory.reduction);
            const response = await axios.post("http://localhost:9000/products/reduction",reduction,
            {
                Headers:{             
                    'Content-Type': 'application/json',
                    "Authorization":data.updatedCategory.user
                }
            });
            return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const updateProduct=createAsyncThunk(
    "products/updateProduct",
    async(data)=>{
        try{
            const images=[data.updatedCategory.images1,data.updatedCategory.images2,data.updatedCategory.images3]
            const product=new Product(data.idProduct,data.updatedCategory.name,data.updatedCategory.marque,data.updatedCategory.image,data.updatedCategory.description,parseInt(data.updatedCategory.quantity),parseInt(data.updatedCategory.Ordredquantity),images,data.updatedCategory.unitQuantity,parseFloat(data.updatedCategory.reduction),parseFloat(data.updatedCategory.previousPrice),parseFloat(data.updatedCategory.price),JSON.parse(data.updatedCategory.category));
            console.log(product);
            const response=await axios.put("http://localhost:9000/products/"+data.idProduct.toString(),product,
            {
                Headers:{             
                    'Content-Type': 'application/json',
                    "Authorization":data.updatedCategory.user
                }
            });
            return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)
export const fetchProducts=createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        try{
            const response= await axios.get("http://localhost:9000/products");
        return response.data;
        }
        catch(error){
            throw new Error(error.message);
        }
    }
)

export const productsSlice=createSlice({
    name:"products",
    initialState:{
        data:[],
      
        product:null,
        status:null,
        message:''
    },
    reducers:{


    },
    extraReducers:{
        [fetchProduct.fulfilled]:(state,action)=>{
            state.product=action.payload;
            state.status="success";
        },
        [deleteProduct.fulfilled]:(state,action)=>{
            state.data=state.data.filter(item=>item.id!==action.payload);
            state.status="success";

        },
        [deleteProduct.pending]:(state)=>{
            state.status="loading";
        }, 
        [deleteProduct.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        [fetchProduct.pending]:(state)=>{
            state.status="loading";
        },
        [fetchProduct.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        [updateProduct.fulfilled]:(state,action)=>{
            state.data[action.payload.id]=action.payload;
            state.status="success";
        },
        [updateProduct.pending]:(state)=>{
            state.status="loading";
        },
        [updateProduct.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        },
        
        [fetchProducts.fulfilled]:(state,action)=>{
            state.data=action.payload;
            state.status="success";
        },
        [fetchProducts.pending]:(state)=>{
            state.status="loading";
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.status="failed";
            state.message=action.error.message;
        }

    }
});
export default productsSlice.reducer;