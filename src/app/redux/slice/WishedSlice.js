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
            let itemData = JSON.stringify(current(state.wishList));
            localStorage.setItem("wishList", itemData)
        },
        removeWishItem: (state, action) => {
            // console.log(action)
            const data = state.wishList.filter((item) => {
                return item._id !== action.payload
            })
            state.wishList = data;
            let itemData = JSON.stringify(data);
            localStorage.setItem("wishList", itemData)

        }
    },

});

export const { addWishItem, removeWishItem } = Slice.actions;
export default Slice.reducer;
