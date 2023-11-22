import { FC, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IUser } from "../../global/interface/users.interface";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";


const UserDetail:FC = () => {
    const {id} = useParams()
    const {users} = useSelector((store:any) => ({
        users:store.users.users
    }))

    const fetchUserById:null | IUser[] = useMemo(() => {
        if(!id) {
            return null
        }
        return users.filter((u:IUser) => u.id === +id)
    }, [id])
    
    return (
        <div className="px-2 w-full">

        </div>
    )
}

export default UserDetail