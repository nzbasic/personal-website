import classNames from 'classnames';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './navigation/Header';
import { Menu } from './navigation/Menu';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => setMenuOpen(true),
    preventScrollOnSwipe: true
  })

  return (
    <div className="flex flex-col lg:flex-row max-h-screen overflow-hidden box-border">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden lg:block w-72 min-w-80 h-screen z-10 overflow-x-hidden overflow-y-auto bg-monokai-dark"
      >
        <Menu />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        className="block z-50 w-full lg:hidden"
      >
        <Header open={menuOpen} toggle={() => setMenuOpen(prev => !prev)} />
      </motion.div>

      <div {...handlers} className="block lg:hidden absolute top-0 right-0 h-screen w-6 z-50" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={classNames(
        { 'overflow-y-hidden': menuOpen },
        "h-[calc(100vh-4rem)] lg:w-[calc(100vw-18rem)] lg:h-screen overflow-y-auto overscroll-none"
      )}>
        {menuOpen && (
          <div className="bg-monokai-dark absolute w-full z-50">
            <Menu onNavigate={() => setMenuOpen(false)} />
          </div>
        )}
        <Outlet />
      </motion.div>
    </div>    
  );
};
