import { useContext, memo } from "react";
import { SideBarContext } from "../global/context/sidebar";
import { Link, NavLink } from "react-router-dom";

interface links {
  title:string;
  icon: any;
  to:string
}


const Sidebar = memo(() => {
  const {isCollapsed, toggleCollapsed} = useContext(SideBarContext)
  const appLinks:Array<links> = [
    {
      title:'Dashboard',
      icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clip-rule="evenodd" />
    </svg>
    ,
      to:'/dashboard'
    },
    {
      title:'User',
      icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>
    ,
      to:'/user'
    }
  ];
  
  return (
    <div className={`z-10 h-auto bg-gray-800 dark:bg-gray-900 ${isCollapsed ? 'w-16' : 'w-64' }`}>
      <ul className="mt-12 text-gray-400 dark:text-gray-500 space-y-4">
        {
          appLinks.map((link:links) => (
            <li>
              <NavLink to={link.to} className={({isActive, isPending}) => {
                return  isActive ? ("block py-2 px-4 text-white font-extrabold rounded-md text-sm ") : ("block py-2 px-4 text-grey-400 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md text-sm font-medium")
              }}>
                {isCollapsed ? link.icon : <div className="flex justify-start items-center gap-3">
                  <div className="flex justify-center items-center">
                    {link.icon}
                  </div>
                  <h4>{link.title}</h4>
                </div> }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
});

export default Sidebar;
