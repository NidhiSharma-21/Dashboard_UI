import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiPlus, FiGrid, FiBriefcase, FiList, FiClock, FiUsers, FiLayers } from 'react-icons/fi';
import { BsGear } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa'; // Example logo icon

const SideBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <FiGrid /> },
    { name: 'Projects', path: '/projects', icon: <FiBriefcase /> },
    { name: 'Tasks', path: '/tasks', icon: <FiList /> },
    { name: 'Time log', path: '/time-log', icon: <FiClock /> },
    { name: 'Resource mgmt', path: '/resource-mgmt', icon: <BsGear /> },
    { name: 'Users', path: '/users', icon: <FiUsers /> },
    { name: 'Project template', path: '/project-template', icon: <FiLayers /> },
  ];

  return (
    <div className="h-screen w-fit bg-black text-white p-4 flex flex-col">
      {/* Logo */}
      <div className="flex  items-center mb-8 gap-2">
        <FaSun className="text-orange-500 text-3xl" />
        <div className="text-orange-500 text-2xl font-bold">Promage</div>
      </div>
      
     
      {/* Create new project button */}
      <button className="w-full  bg-white text-black py-2 rounded-full flex items-center justify-center gap-2 mb-4 shadow-md">
        <FiPlus className="text-orange-500" />
        <span className="text-sm font-semibold">Create new project</span>
      </button>


      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setActiveTab(item.path)}
            className={`flex items-center gap-3 py-2 px-4 rounded-md ${
              activeTab === item.path ? 'bg-orange-500 text-white' : 'hover:bg-gray-800'
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
