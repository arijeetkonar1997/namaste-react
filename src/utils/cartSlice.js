import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem:(state,action) => {
            //mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state) => {
            state.items.pop()
        },
        deleteItem:(state) => {
            state.items.length=0
        }
    }
})
console.log(cartSlice)

export const {addItem, removeItem, deleteItem} = cartSlice.actions
export default cartSlice.reducer
