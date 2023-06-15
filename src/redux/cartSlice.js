import { createSlice } from "@reduxjs/toolkit";

const products = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products')) : []
const count = localStorage.getItem('count') !== null ? JSON.parse(localStorage.getItem('count')) : 0
const totalPrice = localStorage.getItem('totalPrice') !== null ? JSON.parse(localStorage.getItem('totalPrice')) : 0


const initialState = {
    // products: [
    //              product:{
    //                          id:2,
    //                          title:' kokd',
    //                          price: 342,
    //                      },
    //              count: 9
    //          ]
    products:products ,
    count: count,
    totalPrice: totalPrice
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
            localStorage.setItem('products',JSON.stringify(state.products.map(pro=>pro)))
            localStorage.setItem('count',JSON.stringify(state.count))
            localStorage.setItem('totalPrice',JSON.stringify(state.totalPrice))
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
            localStorage.setItem('products',JSON.stringify(state.products.map(pro=>pro)))
            localStorage.setItem('count',JSON.stringify(state.count))
            localStorage.setItem('totalPrice',JSON.stringify(state.totalPrice))
        },
        removeProduct: (state,action) => {
            state.products.forEach((pro) => {
                if(pro.product.id === action.payload){
                    state.count = state.count - pro.count
                    state.totalPrice = state.totalPrice - (pro.product.price*pro.count)
                }
            })
            state.products = state.products.filter(product => product.product.id !== action.payload)
            localStorage.setItem('products',JSON.stringify(state.products.map(pro=>pro)))
            localStorage.setItem('count',JSON.stringify(state.count))
            localStorage.setItem('totalPrice',JSON.stringify(state.totalPrice))
        }
    }
})

export const { addProduct, deleteProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer