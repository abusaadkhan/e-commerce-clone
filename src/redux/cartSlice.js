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
            let flag = false
            state.products.forEach((pro)=>{
                if(action.payload.id===pro.product.id){
                    pro.count = pro.count+1
                    state.count = state.count+1
                    flag = true
                }
            })
            if(flag===false){
                let pro = {
                    product: action.payload,
                    count: 1
                }
                state.products.push(pro)
                state.count = state.count+1
            }
        },
        deleteProduct: (state,action) => {
            //state.products = state.products.filter(product => product.id !== action.payload)
            state.products.forEach((pro,index)=>{
                if(pro.product.id === action.payload){
                    if(pro.count === 1){
                        state.products.splice(index,1)
                    }
                    else{
                        pro.count = pro.count - 1
                    }
                }
            })
            state.count = state.count-1
        }
    }
})

export const { addProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer