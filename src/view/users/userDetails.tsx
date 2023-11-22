import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IUser } from "../../global/interface/users.interface";
import Profile from "../../common/components/profile";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Thunks } from "../../store/users/user.thunck";


const UserDetail:FC = () => {
    const {id} = useParams()
    const dispatch = useDispatch<ThunkDispatch<any,any,any>>()
    const {users} = useSelector((store:any) => ({
        users:store.users.users
    }))

    useEffect(() => {
        if(!id) {
            // do nothing
        } else {
            setUserDetail(users.filter((u:IUser) => u.id === +id)[0])
        }
    }, [id])
    
    const [userDetails, setUserDetail] = useState<IUser>({
        address:{
            city:'',
            geo: {
                lat:'',
                lng:''
            },
            street:'',
            suite:'',
            zipcode:''
        },
        company:{
            bs:'',
            catchPhrase:'',
            name:''
        },
        email:'',
        name:'',
        phone:'',
        username:'',
        website:'',
        id:0
    })

    const updateResource = async() => {
        dispatch(Thunks.editUser(userDetails))
    } 


    return (
        <div className="px-2 w-full">
            <div className="border-0 h-full w-full px-3 py-2">
                <div className="leading-relaxed font-[24] text-bold capitalize text-blue-700">User Details</div>
                {/** the details of the user */}
                <div className="mt-6">
                    <Profile data={userDetails.name} label="fullname" handler={(e:any) => setUserDetail((u:any) => ({...u, name:e.target.value}))} saveButton={updateResource}/>
                </div>

                <div className="my-3">
                    <Profile data={userDetails.email} label="Email" handler={(e:any) => setUserDetail((u:any) => ({...u, email:e.target.value}))} saveButton={updateResource} />
                </div>
                <div className="my-3">
                    <Profile data={userDetails.username} label="Usename" handler={(e:any) => setUserDetail((u:any) => ({...u, username:e.target.value}))} saveButton={updateResource}/>
                </div>

                <div className="my-3">
                    <Profile data={userDetails.website} label="Website" handler={(e:any) => setUserDetail((u:any) => ({...u, website:e.target.value}))} saveButton={updateResource}/>
                </div>

                <div className="flex flex-col mt-5">
                    <h6 className="text-xs lg:text-sm text-gray-700 uppercase">company</h6>
                    <div className="flex flex-col justify-start gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
                        <div className="md:w-1/3 md:mr-6">
                            <Profile data={userDetails.company.name} show={false} label="company name" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    company: {
                                        ...u.company,
                                        name:e.target.value
                                    }
                                }
                            ))}
                            saveButton={updateResource}
                            />
                        </div>
                        <div className="md:w-1/3 md:mr-6">
                            <Profile data={userDetails.company.catchPhrase} show={false} label="catch phrase" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    company: {
                                        ...u.company,
                                        catchPhrase:e.target.value
                                    }
                                }
                            ))}
                            saveButton={updateResource}
                            />
                        </div>
                        <div className="md:w-1/3 md:mr-0">
                            <Profile data={userDetails.company.bs} show={false} label="bs" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    company: {
                                        ...u.company,
                                        bs:e.target.value
                                    }
                                }
                            ))}
                            saveButton={updateResource}
                            />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col mt-5">
                    <h6 className="text-xs lg:text-sm text-gray-700 uppercase">Address</h6>
                    <div className="flex flex-col justify-start gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
                        <div className="md:w-1/3 md:mr-6">
                            <Profile data={userDetails.address.city} show={false} label="city" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    address: {
                                        ...u.address,
                                        city:e.target.value
                                    }
                                }))}
                                saveButton={updateResource}
                            />
                        </div>
                        <div className="md:w-1/3 md:mr-6">
                            <Profile data={userDetails.address.street} show={false} label="streets" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    address: {
                                        ...u.address,
                                        street:e.target.value
                                    }
                                }))}
                                saveButton={updateResource}
                                />
                        </div>
                        <div className="md:w-1/3 md:mr-0">
                            <Profile data={userDetails.address.suite} show={false} label="suite" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    address: {
                                        ...u.address,
                                        suite:e.target.value
                                    }
                                }))}
                                saveButton={updateResource}
                                />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-3 md:gap-0 md:flex-row md:items-center md:justify-between mt-4 md:mt-3">
                        <div className="md:w-1/3 md:mr-6">
                            <Profile data={userDetails.address.zipcode} show={false} label="zipcode" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    address: {
                                        ...u.address,
                                        zipcode:e.target.value
                                    }
                                }))} 
                                saveButton={updateResource}
                            />
                        </div>
                        <div className="md:w-1/3 md:mr-6">
                            <Profile data={userDetails.address.geo.lat} show={false} label="latitude" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    address: {
                                        ...u.address,
                                        geo:{
                                            ...u.address.geo,
                                            lat:e.target.value
                                        }
                                    }
                                }))}
                                saveButton={updateResource}
                            />
                        </div>
                        <div className="md:w-1/3 md:mr-0">
                            <Profile data={userDetails.address.geo.lng} show={false} label="longtitude" handler={(e:any) => setUserDetail((u:any) => (
                                {
                                    ...u, 
                                    address: {
                                        ...u.address,
                                        geo:{
                                            ...u.address.geo,
                                            lng:e.target.value
                                            //lo:e.target.value
                                        }
                                    }
                                }))}
                                saveButton={updateResource}
                                />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UserDetail