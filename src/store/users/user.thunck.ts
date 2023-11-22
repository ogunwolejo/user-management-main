import { createAsyncThunk } from "@reduxjs/toolkit";
import useEnv from "../../global/hooks/use-env";
import axios from "axios";

const apiUrl:string = "https://jsonplaceholder.typicode.com/users"

const getUsers = createAsyncThunk('getUsers', async(data:undefined, {rejectWithValue}) => {
    try {
        console.log("API", apiUrl)
        const response = await axios.get(apiUrl)
        console.log("Request", response)
        return response

    } catch(err:any) {
        return rejectWithValue(err.response.data)
    }
})

export const Thunks = {
    getUsers
}