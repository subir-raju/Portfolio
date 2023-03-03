import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Section from './Section';
import Technologies from './Technologies';

const Home = () => {
    return(
        <>
         <Navbar />
         <div> 
            <Section />
         </div>
         <div>
            <Technologies />
         </div>
        </>
    );
}

export default Home;