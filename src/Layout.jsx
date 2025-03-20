import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './SideBar';
import TopBar from './TopBar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 1024
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Animate Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial={{ width: 0 }}
        animate={{ width: isSidebarOpen ? '250px' : 0 }}
        exit={{ width: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`overflow-hidden flex items-center justify-center z-30 bg-black ${
          isSidebarOpen ? 'absolute left-0' : ''
        } lg:static`}
      >
        <Sidebar />
      </motion.div>

      <div className="flex-1 flex overflow-hidden flex-col">
        <TopBar
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="flex-1 overflow-auto bg-white ">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
