import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Research from './Research';
import Home from './Home';
import Blog from './Blog';


function NavComponent() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/research" element={<Research />} />
    <Route path="/blog" element={<Blog />} />
   </Routes>
   </BrowserRouter>
  );
}

export default NavComponent;
