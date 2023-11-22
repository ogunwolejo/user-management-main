import { createSlice } from "@reduxjs/toolkit";
import { UserSlice } from "../../global/interface/slice";
import { Thunks } from "./user.thunck";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState:UserSlice = {
    error:null,
    loading:false,
    users:[]
}

const userSlice = createSlice({
    initialState,
    name:'user',
    reducers:{},
    extraReducers(builder) {
        builder.addCase(Thunks.getUsers.pending, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                loading:true
            }
        })
        builder.addCase(Thunks.getUsers.fulfilled, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                users:action.payload.data,
                error:null,
                loading:false
            }
        })
        builder.addCase(Thunks.getUsers.rejected, (state, action:PayloadAction<any>) => {
            console.log("Erro", action)
            return {
                ...state,
                error: "ERROR ....",
                loading:false
            }
        })
    },
})


export const UserReducer = userSlice.reducer