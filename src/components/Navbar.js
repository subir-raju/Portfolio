import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import img1 from './assets/picpro.jpeg';

const Normal_Format_URL='http://localhost:3001/Resume/Normal/CV_SubirDeyRaju.pdf'




const Navbar = () => {
    const downloadFileAtURL=(url)=>{
    const fileName = url.split('/').pop();
    const aTag=document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};
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
                    <li onClick={()=>{downloadFileAtURL(Normal_Format_URL)}}>
                        <b>Resume</b>
                    </li>
                </ul>
            </nav>
          </div>
    
    );
}

export default Navbar;