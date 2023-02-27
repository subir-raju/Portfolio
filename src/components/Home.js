import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Section from './Section';

const Home = () => {
    return(
        <>
         <Navbar />
         <div> 
            <Section />
         </div>
        </>
    );
}

export default Home;