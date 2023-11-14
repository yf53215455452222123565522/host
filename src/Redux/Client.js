import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers=createAsyncThunk("users/fetchUsers",async()=>{
    try {
      const response = await axios.get(
        "http://localhost:9000/users",
        {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin':"*"
            },
          }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  })
  export const fetchUser=createAsyncThunk("users/fetchUser",async(id)=>{
    try {
      const response = await axios.get(
        "http://localhost:9000/users/"+id.toString,
        {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin':"*"
            },
          }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  })

  export const clientSlice = createSlice({
    name: "client",
  initialState: {
    data: [],
    client:[],
    status: null,
    message: "",
  },
  extraReducers:{
    [fetchUsers.fulfilled]: (state, action) => {
        state.message = "";
        state.data = action.payload;
        state.status = "success";
      },
  
      [fetchUsers.pending]: (state) => {
        state.status = "loading";
      },
      [fetchUsers.rejected]: (state, action) => {
        state.status = "failed";
  
        state.message = action.error.message;
      },
      [fetchUser.fulfilled]: (state, action) => {
        state.message = "";
        state.client = action.payload;
        state.status = "success";
      },
  
      [fetchUser.pending]: (state) => {
        state.status = "loading";
      },
      [fetchUser.rejected]: (state, action) => {
        state.status = "failed";
  
        state.message = action.error.message;
      },
  
},
});
export default clientSlice.reducer;