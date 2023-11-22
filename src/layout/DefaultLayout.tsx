import { FC, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/header';
import { SideBarContext } from '../global/context/sidebar';
import SideBar from '../common/sideBar';
import { useNavigate } from 'react-router-dom';

const DefaultLayout:FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleHandler = () => {
    setIsCollapsed((mode) => !mode);
  };
  const navigate = useNavigate()

  useLayoutEffect(() => {
    navigate('/dashboard')
  }, [])
  
  return (
    <SideBarContext.Provider value={{
        isCollapsed,
        toggleCollapsed:toggleHandler
    }}>
    <div className="flex min-h-screen relative">
        <SideBar/>
        <div className="flex-grow w-full bg-white">
            <Header/>
            <div className='p-6'>
                <Outlet/>
            </div>
        </div>
    </div>
    </SideBarContext.Provider>
    
  );
}

export default DefaultLayout