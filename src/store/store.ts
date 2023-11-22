import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./users/user.slice";

const store = configureStore({
    reducer:{
        users:UserReducer
    },
})

export default store