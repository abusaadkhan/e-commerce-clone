import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // products: [
    //              product:{
    //                          id:2,
    //                          title:' kokd',
    //                          price: 342,
    //                      },
    //              count: 9
    //          ]
    products: [ ],
    count: 0,
    totalPrice: 0
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
                    state.totalPrice = state.totalPrice + pro.product.price
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
                state.totalPrice = state.totalPrice + action.payload.price
            }
            
        },
        deleteProduct: (state,action) => {
            //state.products = state.products.filter(product => product.id !== action.payload)
            state.products.forEach((pro,index)=>{
                if(pro.product.id === action.payload){
                    state.totalPrice = state.totalPrice - pro.product.price
                    if(pro.count === 1){
                        state.products.splice(index,1)
                    }
                    else{
                        pro.count = pro.count - 1
                    }
                }
            })
            state.count = state.count-1
        },
        removeProduct: (state,action) => {
            state.products.forEach((pro) => {
                if(pro.product.id === action.payload){
                    state.count = state.count - pro.count
                    state.totalPrice = state.totalPrice - (pro.product.price*pro.count)
                }
            })
            state.products = state.products.filter(product => product.product.id !== action.payload)
            
        }
    }
})

export const { addProduct, deleteProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer