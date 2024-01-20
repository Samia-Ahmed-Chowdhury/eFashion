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

        },
        updateCartItem: (state, action) => {
            // console.log(action.payload.type)
            const data = state.cartList.find((item) => {
                return item._id === action.payload.item._id && item.img === action.payload.item.img

            })
            // console.log(current(data))

            if (data && action.payload.type == 'increment') {
                data.quantity = data.quantity + 1
            }
            else if (data && action.payload.type == 'decrement') {
                data.quantity = data.quantity - 1
            }
            // console.log('updated', current(state))
            let itemData = JSON.stringify(current(state.cartList));
            localStorage.setItem("cartList", itemData)
        },
    },

});

export const { addCartItem, removeCartItem, updateCartItem } = Slice.actions;
export default Slice.reducer;
