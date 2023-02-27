import React from 'react';
import './Section.css';
import img1 from './assets/picpro.jpeg';

const Section = () => {
    return(
        <section className='main-section'>
            <div className='container'>
              <div className='image'>
                
               </div>
                <div className='texts'>
                     <img src={img1} alt='' />
                    <h1> Hello My Name is</h1>
                    <h1 className='h1-big'>Subir Dey Raju</h1>
                    <p> Professional Front-end Developer with almost 
                        02 years of expeiment alongside continueing a 
                        masters degree at Freie Universität Berlin in Germany</p>
                    <button className='text-button'>My Work</button>
                </div>

              
            </div>
        </section>
    );
}

export default Section;