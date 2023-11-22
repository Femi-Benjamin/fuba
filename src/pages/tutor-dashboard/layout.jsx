import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;