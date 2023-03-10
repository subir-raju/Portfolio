import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () =>{
    return(
       <div className='footer'>
        <div className='container-footer'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href='mailto:subirdey477@gmail.com'><AiOutlineMail size='1.2rem' />  Email Me</a></li>
                        
                    </ul>
                </div>
               
                <div className='footer-col'>
                    <h4>DigitalSpace</h4>
                    <ul>
                         <li><a href='#'><FaFacebook  size='1rem' />  Facebook</a></li>
                        <li><a href='#'><FaInstagram size='1rem' />  Instagram</a></li>
                        <li><a href='https://www.linkedin.com/in/subir-dey/'><FaLinkedinIn size='1rem' />  Linkedin</a></li>
                        <li><a href='https://github.com/subir-raju'><FaGithub size='1rem' />  GitHub</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
       </div>
    );
        
}

export default Footer;