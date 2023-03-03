import React from 'react';
import Navbar from './Navbar';
import './About.css';
import './Section.css';

const About = () => {
    return(
        <>
        <Navbar />
         <div className='container-home'>
            <div className='about-note'>
                <p>Born in the beautiful mountainous
                    land of Bangladesh, Rangamati.
                    
                </p>

            </div>
         </div>
        </>
       
    );
}

export default About;