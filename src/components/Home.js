import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return(
        <>
         <Navbar />
         <div> 
            <h1>Halo welcomen </h1>
         </div>
        </>
    );
}

export default Home;