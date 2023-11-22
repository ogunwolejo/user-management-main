import { useContext, memo } from "react";
import { SideBarContext } from "../global/context/sidebar";
import { Link } from "react-router-dom";

interface links {
  title:string;
  icon: string;
  to:string
}


const Sidebar = memo(() => {
  const {isCollapsed, toggleCollapsed} = useContext(SideBarContext)
  const appLinks:Array<links> = [
    {
      title:'Dashboard',
      icon:'',
      to:'dashboard'
    },
    {
      title:'User',
      icon:'',
      to:'user'
    }
  ];
  
  return (
    <div className={`z-10 h-screen bg-gray-800 dark:bg-gray-900 ${isCollapsed ? 'w-16' : 'w-64' }`}>
      <div className={`absolute top-0 ${isCollapsed ? 'left-12' : 'left-16 md:left-48 lg:left-52'}`}>
        <button className='shadow-lg p-2 rounded flex justify-center bg-gray-800 dark:bg-gray-900' onClick={toggleCollapsed}> 
            {isCollapsed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="stroke-2 w-4 h-4 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-2 w-4 h-4 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>
            }
        </button>
      </div>
      <ul className="mt-12 text-gray-400 dark:text-gray-500 space-y-4">
        {
          appLinks.map((link:links) => (
            <li>
              <Link to={link.to} className="block py-2 px-4 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-md text-sm font-medium">
                {isCollapsed ? link.title[0] : link.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
});

export default Sidebar;
