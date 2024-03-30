import {createSlice} from '@reduxjs/toolkit'
import {findObject} from "../commonFunc/commonFunctions";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: <any>[],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
        remove: (state, action) => {
            state.value = state.value.filter((item: any) => item.id !== action.payload.id);
        },
    },
})

export const {add, remove} = cartSlice.actions
export default cartSlice.reducer