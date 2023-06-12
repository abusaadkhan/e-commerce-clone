import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { fakeStoreApi } from './apiSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
})


setupListeners(store.dispatch)