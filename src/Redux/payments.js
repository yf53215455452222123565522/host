import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPayments=createAsyncThunk(
    "payments/fetchPayments",
    async()=>{
        try {
            const response = await axios.get(`http://localhost:9000/payments`);
            return response.data;
          } catch (error) {
            throw new Error(error.message)
          }
    }
)
export const fetchUserPayments=
createAsyncThunk(
    "payments/fetchUserPayments",
    async(id)=>{
        try {
            const response = await axios.get("http://localhost:9000/payments/user/"+id.toString());
            return response.data;
          } catch (error) {
            throw new Error(error.message)
          }
    }
)

const initialState = {
    status: 'idle',
    error: null,
    payment: null,
    data: []
  };
  const paymentSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
      .addCase(fetchPayments.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPayments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUserPayments.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserPayments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserPayments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});
export default paymentSlice.reducer;