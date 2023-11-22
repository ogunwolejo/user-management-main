import { useContext } from "react"
import { SideBarContext } from "../global/context/sidebar"

export default function Header() {
    const {toggleCollapsed, isCollapsed } = useContext(SideBarContext)
    return (
        <header className='h-16 p-6 shadow-md relative'>
            <div className='flex px-2'>
            </div>
        </header>
    )
} 

