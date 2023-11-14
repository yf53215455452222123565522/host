import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
  'orders/fetchOrder',
  async (idOrder) => {
    try {
      const response = await axios.get(`http://localhost:9000/orders/${idOrder.toString()}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message)
    }

  }
)
export const attribuerOrderPreparateur=createAsyncThunk(
  "orders/attribuerOrderPreparateur",
  async(data)=>{
    try{
      const response=await axios.patch("http://localhost:9000/orders/"+data.order.toString()+"/Preparateur/"+data.email.toString());
      return response.data;
    }
    catch (error) {
      throw new Error(error.message)
    }
  }
)
export const payOrder=createAsyncThunk(
  "orders/payOrder",
  async(data)=>{
    try{
      const response=await axios.patch("http://localhost:9000/orders/pay/"+data.order.toString()+"/email/"+data.email.toString());
      return response.data;
    }
    catch (error) {
      throw new Error(error.message)
    }
  }
)
export const readyToGoOrder=createAsyncThunk(
  "orders/attribuerOrderPreparateur",
  async(id)=>{
    try{
      const response=await axios.patch("http://localhost:9000/orders/readyToGo/"+id.toString());
      return response.data;
    }
    catch (error) {
      throw new Error(error.message)
    }
  }

)
export const fetchOrdersPreparedByUser=createAsyncThunk(
  "orders/fetchOrdersPreparedByUser",
  async(email)=>{
    try{
      const response=await axios.get("http://localhost:9000/orders/Preparateur/"+email.toString());
      return response.data;
    }
    catch (error) {
      throw new Error(error.message)
    }
  }
)
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    try {
      const response = await axios.get(`http://localhost:9000/orders`);
      return response.data;
    } catch (error) {
      throw new Error(error.message)
    }

  }
)

export const fetchOrderByUser = createAsyncThunk(
  "orders/fetchOrderByUser",
  async (idUser) => {
    try {
      const response = await axios.get(`http://localhost:9000/orders/user/${idUser.toString()}`);
      return response.data;
    }
    catch (error) {
      throw new Error(error.message)
    }
  }
)
export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (order) => {
    try {
      const response = await axios.post("http://localhost:9000/orders", order);
      return response.data;
    } catch (error) {
      throw new Error(error.message)
    }
  }
);



const initialState = {
  status: 'idle',
  error: null,
  order: null,
  data: []
};



const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchOrderByUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchOrderByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchOrderByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }).addCase(fetchOrder.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOrders.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOrdersPreparedByUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchOrdersPreparedByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchOrdersPreparedByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addOrder.pending, state => {
        state.status = 'loading';
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
        state.data.push(action.payload);
        console.log("Order added :", action.payload);

      })
      .addCase(addOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.error("Failed to add Order :", action.error);
      });
  }
});

export default orderSlice.reducer;




export const sendOrder = (userId, productsCart, quantities) => {
  const order = {
    user: userId,
    state: "commandé",
    items: [],
    totalPrice: 0,
  };

  productsCart.cartItems.forEach((productCart) => {
    order.items.push({
      product: productCart.id,
      quantity:
        quantities[productCart.id] ||
        localStorage.getItem(`commande${productCart.id}`) ||
        0,
    });
    order.totalPrice +=
      productCart.price *
      (quantities[productCart.id] ||
        localStorage.getItem(`commande${productCart.id}`) ||
        0);
  });

  console.log("order :  " + JSON.stringify(order));
  return addOrder(order);
};