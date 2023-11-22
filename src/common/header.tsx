import { useContext } from "react"
import { SideBarContext } from "../global/context/sidebar"

export default function Header() {
    const {toggleCollapsed, isCollapsed } = useContext(SideBarContext)
    return (
        <header className='h-16 p-6 shadow-md relative'>
             <div className={`absolute top-0 ${isCollapsed ? 'left-0' : 'left-0'} `}>
                <button className='shadow-lg p-2 rounded flex justify-center bg-gray-800 dark:bg-gray-900' onClick={toggleCollapsed}> 
                    {isCollapsed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="stroke-2 w-4 h-4 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-2 w-4 h-4 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    }
                </button>
            </div>
            <div className='flex px-2'>
                <h3 className="uppercase text-sm md:text-lg lg:text-xl">User Management Tool</h3>
            </div>
        </header>
    )
} 

