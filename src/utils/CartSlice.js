import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            console.log(action.payload, state.items)
        },
        clearItem: (state, action) => {
            state.items = []
        }
    }
})

export const { addItem, clearItem } = cartSlice.actions

export default cartSlice.reducer