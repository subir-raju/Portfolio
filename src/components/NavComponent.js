import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Research from './Research';
import Home from './Home';
import Resume from './Resume';

function NavComponent() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/research" element={<Research />} />
    <Route path="/resume" element={<Resume />} />
   </Routes>
   </BrowserRouter>
  );
}

export default NavComponent;
