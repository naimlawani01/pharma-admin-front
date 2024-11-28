import React from 'react';
import SidebarUserPanel from './sidebarUserPanel';
import SideMenu from './sideMenu';

const Sidebar = () => {
  const drawerWidth = "64"; // Largeur de la sidebar en Tailwind (16rem)

  return (
    <div className={`fixed top-0 left-0 h-full w-${drawerWidth} bg-gray-900 text-white shadow-lg flex flex-col`}>
      {/* Contenu principal */}
      <div className=" flex-grow mt-16">
        {/* Sidebar User Panel */}
        <SidebarUserPanel />
      </div>
      <div className=' flex-1 mb-64'>
        {/* Side Menu */}
        <SideMenu />
      </div>
      
    </div>
  );
};

export default Sidebar;
