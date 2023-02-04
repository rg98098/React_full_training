import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";
//When we click on + button, it dispatches an action, which 
//then calls the reducer function. This reducer function modifies 
//the slice in our redux store

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
});

export default store;