import { configureStore } from '@reduxjs/toolkit'
import wishListReducer from './slice/WishedSlice' 
import cartListReducer from './slice/CartSlice'

const store = configureStore({
    reducer: {
        wishListData: wishListReducer,
        cartListData: cartListReducer,
    }
})
export default store