import { configureStore } from '@reduxjs/toolkit'
import wishListReducer from './slice/WishedSlice' 

const store = configureStore({
    reducer: {
        wishListData: wishListReducer,
    }
})
export default store