import classNames from 'classnames';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './navigation/Header';
import { Menu } from './navigation/Menu';
import { MobileMenu } from './navigation/MobileMenu';

export const Layout = () => (
  <>
    <div className="hidden lg:block">
      <DesktopLayout />
    </div>
    <div className="block lg:hidden">
      <MobileLayout />
    </div>
  </>
);

const MobileLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classNames(
      "flex flex-col",
      { 'overflow-y-hidden': menuOpen }
    )}>
      <Header open={menuOpen} toggle={() => setMenuOpen(prev => !prev)} />
      
      <div className={classNames(
        "h-[calc(100vh-4rem)] mt-16",
      )}>
        {menuOpen && (
          <MobileMenu />
        )}
        <Outlet />
      </div>
    </div>
  )
};

const DesktopLayout = () => (
  <div className="flex">
    <div className="w-72 min-w-80 h-screen z-10 overflow-x-hidden">
      <Menu />
    </div>
    <div className="w-[calc(100vw-18rem)] h-screen overflow-y-auto">
      <Outlet />
    </div>
  </div>
);