import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../global/interface/users.interface";
import UserForm from "../../common/components/userForm";
// import UserForm from "../../common/components/userForm";
// import { Modal, Portal } from "../../common/components/modal";

const CreateUser:FC = () => {
    const {users} = useSelector((store:any) => ({
        users: store.users.users
    }))

    const lastId:number = useMemo(() => {
        const lastId:IUser = users[users.length - 1]
        return lastId.id
    }, [users])

    console.log(lastId)

    return (
        <div className="h-full items-center justify-center">
            <div className="p-8">
                <UserForm lastId={lastId}/>
            </div>
        </div>
    )
}

export default CreateUser
