import React from "react";
import { Main } from "./components/pages/Main";
import { Projects } from './components/pages/Projects'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/pages/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
