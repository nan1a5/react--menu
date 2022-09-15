import { createSlice } from "@reduxjs/toolkit";
import { updatenum, additem } from "./menu";


const initialState = {
    subtotal: 79.98,
    discount: 3.00
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        addsubtotal: (state, {payload}) => {
            state.total += payload.add
            state.subtotal += payload.add
        },
        adddiscount: (state, {payload}) => {
            state.discount -= payload.add
            state.discount += payload.add
        }
    },
    extraReducers: {
        [updatenum](state, {payload}) {
            state.subtotal += (payload.num * payload.price)
            console.log(state.subtotal)
            console.log({payload})
        },
        [additem](state, {payload}) {
            state.subtotal += (payload.item.num * payload.item.price)
        }
    }
})


export const { addsubtotal, adddiscount } = amountSlice.actions
export default amountSlice.reducer