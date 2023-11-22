import { createAsyncThunk } from "@reduxjs/toolkit";
import useEnv from "../../global/hooks/use-env";
import axios from "axios";
import { ICreateUser } from "../../global/interface/users.interface";

//const apiUrl:string = "https://jsonplaceholder.typicode.com/users"

const getUsers = createAsyncThunk('getUsers', async(data:undefined, {rejectWithValue}) => {
    try {
        const apiUrl = useEnv()
        const response = await axios.get(apiUrl)
        return response.data
    } catch(err:any) {
        return rejectWithValue(err.response.data)
    }
})

const deleteUser = createAsyncThunk('deleteUser', async(id:number, {rejectWithValue}) => {
    try {
        const apiUrl = useEnv()
        const response = await axios.delete(`${apiUrl}/${id}`, {
            method:'DELETE',
        })
        return response
    } catch (error:any) {
        return rejectWithValue(error.response.data)
    }
})

const addUser = createAsyncThunk('addUser', async(data:ICreateUser, {rejectWithValue}) => {
    try {
        console.log(data)
        const apiUrl = useEnv()
        const response = await axios.post(apiUrl,  {
            method:'POST',
            data:JSON.stringify(data)
        })
        console.log(response)
        return response
    } catch (error:any) {
        return rejectWithValue(error.response.data)
    }
})

export const Thunks = {
    getUsers,
    deleteUser,
    addUser
}