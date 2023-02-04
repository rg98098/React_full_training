import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:["Apple","Banana"]
  },
  // actions functions
  reducers: {
    addItem: (state,action) => {
      state.items.push(action.payload)
    },
    removerItem:(state,action)=> {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const {addItem, removerItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;