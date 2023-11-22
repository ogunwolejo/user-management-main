import { FC } from "react";

const IconBox:FC<{bgColor:string; icon:any; handler:any}> = ({bgColor, icon, handler}) => {
    return (
        <button autoFocus={false} className={`flex items-center ${bgColor} shadow-lg border rounded p-2 h-8 w-8`} onClick={handler}>
            {icon}
        </button>
    )
}


export default IconBox