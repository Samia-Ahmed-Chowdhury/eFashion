'use client'
import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    wishList: JSON.parse(localStorage.getItem("wishList")) ? JSON.parse(localStorage.getItem("wishList")) : []
}

const Slice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addWishItem: (state, action) => {
            // console.log(action.payload)
            state.wishList.push(action.payload);
            let userData = JSON.stringify(current(state.wishList));
            localStorage.setItem("wishList", userData)
        },
        removeWishItem: (state, action) => {
            // console.log(action)
            const data = state.wishList.filter((item) => {
                return item._id !== action.payload
            })
            state.wishList = data;
            let userData = JSON.stringify(data);
            localStorage.setItem("wishList", userData)

        }
    },

});

export const { addWishItem, removeWishItem } = Slice.actions;
export default Slice.reducer;
