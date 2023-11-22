import { FC, Fragment, useState } from "react";
import IconBox from "../iconBox";
import { useSelector } from "react-redux";
import Loader from "../loader";
import { Oval } from "react-loader-spinner";

//appLoading

const Profile:FC<{label:string; data:string; handler:any; saveButton:any; show?:boolean}> = ({label, data, handler, saveButton, show = true}) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const {appLoading} = useSelector((store:any) => ({
        appLoading:store.users.appLoading
    }))
    const saveUpdate = async(e:any) => {
        await saveButton()
        setIsEditable(false)
    }

    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <div className="flex flex-col justify-start">
                    {
                        !isEditable ? <>
                            {show && <p className="text-xs lg:text-sm text-gray-700 uppercase">{label}</p>}
                            <h3 className="text-xs md:text-md lg:text-lg mt-0">{data}</h3>
                        </> : (
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                type="text"
                                placeholder={label}
                                value={data}
                                onChange={(e:any) => handler(e)}
                            />
                        )
                    }
                </div>
                {!isEditable ? <IconBox bgColor="bg-white" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-800 stroke-2 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  } 
                  handler={() => setIsEditable(true)} 
                /> : (
                    <button type="button" onClick={saveUpdate} className="py-2 px-4 bg-blue-700 border-0 hover:ring-offset-2 hover:ring-2 focus:ring-2 hover:ring-blue-800 focus:ring-blue-800 gap-2 rounded-md shadow-sm flex justify-between items-center">
                        {!appLoading ? <span className="text-white text-sm uppercase text-bold">Save</span> : (
                            <Oval
                            height={12}
                            width={12}
                            color={"blue"}
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor={"blue"}
                            strokeWidth={5}
                            strokeWidthSecondary={5}
          
                          />
                        ) }
                    </button>
                )}
            </div>
        </Fragment>
    )
}

export default Profile