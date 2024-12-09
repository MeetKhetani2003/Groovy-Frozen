import { Outlet } from 'react-router-dom';

import NavBar from '@/components/molicuels/NavBar';

const Layout = () => {
  return (
    <div className=" min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
