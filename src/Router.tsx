import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/layout/Layout";
import { useNavigation } from "./context/NavigationProvider";
import { useData } from "./context/DataProvider";
import { motion } from "framer-motion";

const Router = () => {
  const { scrollTo, pageLoadHash } = useNavigation();
  const { progress, loaded } = useData();

  useEffect(() => {
    const onPageLoad = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
  
      if (pageLoadHash !== '#about') {
        scrollTo(pageLoadHash)
      }
    }
    
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [scrollTo, pageLoadHash])

  if (!loaded) return (
    <div className="h-screen w-screen bg-monokai-light flex items-center justify-center">
      <div className="mx-12 w-full border border-function rounded-md border-2 h-12">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress * 100 + '%' }}
          transition={{ duration: 1 }}
          className="bg-function h-full"
        >
        </motion.div>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
