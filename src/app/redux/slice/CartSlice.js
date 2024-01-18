'use client'
import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    cartList: JSON.parse(localStorage.getItem("cartList")) ? JSON.parse(localStorage.getItem("cartList")) : []
}

const Slice = createSlice({
    name: "cartList",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            // console.log(action.payload)
            state.cartList.push(action.payload);
            let itemData = JSON.stringify(current(state.cartList));
            localStorage.setItem("cartList", itemData)
        },
        removeCartItem: (state, action) => {
            // console.log(action)
            const data = state.cartList.filter((item) => {
                return item._id !== action.payload
            })
            state.cartList = data;
            let itemData = JSON.stringify(data);
            localStorage.setItem("cartList", itemData)

        }
    },

});

export const { addCartItem, removeCartItem } = Slice.actions;
export default Slice.reducer;
