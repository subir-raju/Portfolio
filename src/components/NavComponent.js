import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';

function NavComponent() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
  );
}

export default NavComponent;
