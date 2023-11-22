import { createSlice } from "@reduxjs/toolkit";
import { UserSlice } from "../../global/interface/slice";
import { Thunks } from "./user.thunck";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState:UserSlice = {
    error:null,
    loading:false,
    users:[],
    tableLoading:false,
    appLoading:false
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
                users:action.payload,
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

        // deleting 
        builder.addCase(Thunks.deleteUser.pending, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                tableLoading:true
            }
        })
        builder.addCase(Thunks.deleteUser.fulfilled, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                error:null,
                tableLoading:false
            }
        })
        builder.addCase(Thunks.deleteUser.rejected, (state, action:PayloadAction<any>) => {
            console.log("Erro", action)
            return {
                ...state,
                error: "ERROR ....",
                tableLoading:false
            }
        })


        // creating a user
        builder.addCase(Thunks.addUser.pending, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                tableLoading:true
            }
        })
        builder.addCase(Thunks.addUser.fulfilled, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                error:null,
                tableLoading:false
            }
        })
        builder.addCase(Thunks.addUser.rejected, (state, action:PayloadAction<any>) => {
            console.log("Erro", action)
            return {
                ...state,
                error: "ERROR ....",
                tableLoading:false
            }
        })

        // editing a user
        builder.addCase(Thunks.editUser.pending, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                appLoading:true
            }
        })
        builder.addCase(Thunks.editUser.fulfilled, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                error:null,
                appLoading:false
            }
        })
        builder.addCase(Thunks.editUser.rejected, (state, action:PayloadAction<any>) => {
            return {
                ...state,
                error: "ERROR ....",
                appLoading:false
            }
        })
    },
})


export const UserReducer = userSlice.reducer