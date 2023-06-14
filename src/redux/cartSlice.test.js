import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [ ],
    count: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state,action) => {
            state.products.push(action.payload)
            state.count = state.count+1
        },
        deleteProduct: (state,action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
            state.count = state.count-1
        }
    }
})

export const { addProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer