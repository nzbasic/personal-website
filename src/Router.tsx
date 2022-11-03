import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/layout/Layout";
import { useNavigation } from "./context/NavigationProvider";
import { ScrollerMotion } from "scroller-motion";

const Router = () => {
  const { scrollTo } = useNavigation();
  
  useEffect(() => {
    const onPageLoad = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      
      scrollTo(window.location.hash)
    }
    
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [scrollTo])

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
