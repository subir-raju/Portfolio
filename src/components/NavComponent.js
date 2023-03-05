import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Research from './Research';
import Home from './Home';


function NavComponent() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/research" element={<Research />} />
  
   </Routes>
   </BrowserRouter>
  );
}

export default NavComponent;
