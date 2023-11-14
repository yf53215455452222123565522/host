import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CartUpdateRequest from "../model/CartUpdateRequest";



export const fetchCart = createAsyncThunk(
    'carts/fetchCart',
    async (id) => {
        try {
            const response = await axios.get("http://localhost:9000/carts/" + id.toString());
            return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }

)



export const deleteAllProductsFromCart = createAsyncThunk(
    'carts/deleteProductsFrommCart',
    async (idCart) => {
        try {
            const response = await axios.delete('http://localhost:9000/carts/deleteProductsCart/' + idCart)
            return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }
)


export const deleteItemFromCart = createAsyncThunk(
    'carts/deleteItemFromCart',
    async ({ userId, itemId }) => {
        try {
            const response = await axios.delete('http://localhost:9000/carts', {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "id": userId,
                    "idProduct": itemId
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);



export const addTocart = createAsyncThunk(
    'carts/addToCart',
    async ([productId, userId]) => {
        const cartUpdateRequest = new CartUpdateRequest(userId, productId);
        try {
            const response = await axios.put('http://localhost:9000/carts', cartUpdateRequest.cart);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);



const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        cart: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCart.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cart = action.payload;
                
                if (state.cart && state.cart.cartItems) {
                  state.cart.cartItems.forEach(element => {
                    localStorage.setItem("commande" + element.id, "1");
                  });
                }
                
                const keysToDelete = [];
                for (let i = 0; i < localStorage.length; i++) {
                  const key = localStorage.key(i);
                  if (key.startsWith("commande")) {
                    const itemId = key.substring("commande".length);
                    const itemExistsInCart = state.cart.cartItems.some(element => element.id === itemId);
                    if (!itemExistsInCart) {
                      keysToDelete.push(key);
                    }
                  }
                }
                keysToDelete.forEach(key => localStorage.removeItem(key));
              })
              
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteAllProductsFromCart.pending, state => {
                state.status = 'loading';
            })
            .addCase(deleteAllProductsFromCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cart = action.payload;
            })
            .addCase(deleteAllProductsFromCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteItemFromCart.pending, state => {
                state.status = 'loading';
            })
            .addCase(deleteItemFromCart.fulfilled, (state, action) => {
                const { itemId } = action.meta.arg;
                localStorage.removeItem(`commande${itemId}`);
                state.status = 'succeeded';
                
                if (state.cart && Array.isArray(state.cart)) {
                    state.cart = state.cart.filter(item => item.idProduct !== itemId);
                }
            })            
            .addCase(deleteItemFromCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTocart.pending, state => {
                state.status = 'loading';
            })
            .addCase(addTocart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                localStorage.setItem("commande" + action.payload.cartItems[action.payload.cartItems.length - 1].id, 1);
                console.log("Product added: ", action.payload);
            })

            .addCase(addTocart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.error("failed ro add Product : ", action.error);
            });
    }
});

export default cartSlice.reducer;



