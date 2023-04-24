import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
    initialState:{
        filteritems:[]
    },
    reducers:{
        AddFilter(state,{payload}){
            state.filteritems.push(payload)
        }
    }
})

export const {AddFilter} = filterSlice.actions

export default filterSlice.reducer