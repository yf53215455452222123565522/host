import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    preference: null,
    loading: false,
    error: null,
};

export const fetchPreference = createAsyncThunk(
    'preference/fetchPreference',
    async (id) => {
        try {
            const response = await axios.get("http://localhost:9000/preference/" + id.toString());
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);



export const deleteProductsFromPreference = createAsyncThunk(
    'preference/deleteProductsFromPreference',
    async ({ userId, itemId }) => {
        
        try {
            const response = await axios.delete("http://localhost:9000/preference", {
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



export const addProductToPreference = createAsyncThunk(
    'preference/addProductToPreference',
    async (preferenceUpdateRequest) => {
        try {
            const response = await axios.put('http://localhost:9000/preference', preferenceUpdateRequest.preference);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

const preferenceSlice = createSlice({
    name: 'preference',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPreference.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPreference.fulfilled, (state, action) => {
                state.loading = false;
                state.preference = action.payload;
            })
            .addCase(fetchPreference.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProductsFromPreference.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProductsFromPreference.fulfilled, (state, action) => {
                state.loading = false;
                state.status = 'succeeded';
                const { itemId } = action.meta.arg;
                state.preference.preferenceItems = state.preference.preferenceItems.filter(item => item.id !== itemId);

              })

            .addCase(deleteProductsFromPreference.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProductToPreference.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProductToPreference.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addProductToPreference.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.error("failed ro add Product : ", action.error);
            });
    },
});

export default preferenceSlice.reducer;
