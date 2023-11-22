import { createAsyncThunk } from "@reduxjs/toolkit";
import useEnv from "../../global/hooks/use-env";
import axios from "axios";

//const apiUrl:string = "https://jsonplaceholder.typicode.com/users"

const getUsers = createAsyncThunk('getUsers', async(data:undefined, {rejectWithValue}) => {
    try {
        const apiUrl = useEnv()
        console.log("API", apiUrl)
        const response = await axios.get(apiUrl)
        console.log("Request", response)
        return response.data
    } catch(err:any) {
        return rejectWithValue(err.response.data)
    }
})

// const deleteUser = createAsyncThunk('deleteUser', async(id:number, {rejectWithValue}) => {
//     try {
//         const apiUrl = useEnv()
//         const response = await axios.delete(apiUrl + `/${id}`)
//         console.log('Deleted', response)
//         return response
//     } catch (error:any) {
//         return rejectWithValue(error.response.data)
//     }
// })

export const Thunks = {
    getUsers,
    //deleteUser
}