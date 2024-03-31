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
        changeQty: (state, action) => {
            const itemList: any = []
            state.value.map((item: any) => {
                if (item.id === action.payload.item.id) {
                    itemList.push({
                        ...item,
                        qty: action.payload.e
                    })
                } else {
                    itemList.push(item)
                }
            });

            state.value = itemList
        },
    },
})

export const {add, remove, changeQty} = cartSlice.actions
export default cartSlice.reducer