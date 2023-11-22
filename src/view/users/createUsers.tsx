import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ICreateUser, IUser } from "../../global/interface/users.interface";
import UserForm from "../../common/components/userForm";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Thunks } from "../../store/users/user.thunck";
// import UserForm from "../../common/components/userForm";
// import { Modal, Portal } from "../../common/components/modal";

const CreateUser:FC = () => {
    const {users, tableLoading} = useSelector((store:any) => ({
        users: store.users.users,
        tableLoading:store.users.tableLoading
    }))
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const addUserHandler = async(data:ICreateUser) => {
        await dispatch(Thunks.addUser(data))
    }

    const lastId:number = useMemo(() => {
        const lastId:IUser = users[users.length - 1]
        return lastId.id
    }, [users])



    return (
        <div className="h-full items-center justify-center">
            <div className="p-8">
                <UserForm lastId={lastId} handler={addUserHandler} loading={tableLoading}/>
            </div>
        </div>
    )
}

export default CreateUser
