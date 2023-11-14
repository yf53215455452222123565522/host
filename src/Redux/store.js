import {combineReducers,configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import  categoriesSlice  from "./category";
import  categoryProduct  from "./categoryProduct";
import product from "./product";
import userSlice from "./user";
import orderSlice from "./orders";
import productSearch from "./productSearch";
import storage from "redux-persist/lib/storage";
import cartSlice from "./carts";
import preferenceSlice from "./preference";
import  clientSlice  from "./Client";
import  paymenttSlice  from "./payments";




const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"], // Add the "users" reducer to the persisted list
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    categories: categoriesSlice,
    categoryProduct: categoryProduct,
    products: product,
    users: userSlice,
    orders: orderSlice,
    carts: cartSlice,
    productsSearch: productSearch,
    preference: preferenceSlice,
    clients:clientSlice,
    payments:paymenttSlice
  })
);



const store = configureStore({
    reducer: persistedReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
});

const persistor = persistStore(store);

export { store, persistor };
