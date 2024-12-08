import { Outlet } from 'react-router-dom';

import NavBar from '@/components/molicuels/NavBar';

const Layout = () => {
  return (
    <div className="bg-primaryBg min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
