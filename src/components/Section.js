import React from 'react';
import './Section.css';
import img1 from './assets/picpro.jpeg';

const Section = () => {
    return(
        <section className='main-section'>
            <div className='container-home'>
              
                <div className='texts'>
                     <img src={img1} alt='' />
                    <h1> Hello, My Name is</h1>
                    <h1 className='h1-big'>Subir Dey Raju</h1>
                    <p> A front-end software engineer with approximately 02 years 
                        of experience in developing web applications. I also love 
                        researching on new technologies and their usage in my projects
                        for better and scalable outcomes. 
                         </p>
                </div>

              
            </div>
        </section>
    );
}

export default Section;