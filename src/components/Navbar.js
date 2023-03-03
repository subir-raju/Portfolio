import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import img1 from './assets/picpro.jpeg';


const Navbar = () => {
    return(  
          <div className="header">
            <nav>
            <div className="logo">
                
                <a href='/'><h1>Subir Dey</h1></a>
            </div>
                <ul className="ul-items">
                    <li>
                        <NavLink to ='/'><b>Home</b></NavLink>
                    </li>
                    <li>
                        <NavLink to='/research'><b>Research</b></NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume'><b>Resume</b></NavLink>
                    </li>
                </ul>
            </nav>
          </div>
    
    );
}

export default Navbar;