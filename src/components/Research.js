import React from 'react';
import Navbar from './Navbar';
import './Research.css';
import './Section.css';

const About = () => {
    return(
        <>
        <Navbar />
         <div className='container-research'>
            <div className='research-div'>
                <h3>Research Interests</h3>
                <p>I have keen interests in Human-Computer Interaction (HCI), 
                    Data Science (DS), Cyber Security and Software Development
                </p>
            </div>
            <div className='research-div'>
                <h3>Previous Research Experiences</h3>
                <p> I have some experiences</p>
            </div>
            <div className='research-div'>
                <h3>My Papers</h3>
                <p>Mushfiqur Rahman Chowdhury, Subir Dey Raju, Lubba Saha,
                     K. M. A. Salam, “Implementation of a Web- based Technology 
                     for Tracking Readymade Garments Manufacturing Defects” 2021 
                     International Conference on Intelligent Technologies, Karnataka,
                      India 25th – 27th June, 2021, accepted for publication.</p>
                      <p>Subir Dey Raju, Fahimul Hoque Shuvo, Sana Sanzida, Fahim Iftekhar, 
                        Syed Athar Bin Amir, “Comparison of Different Convolutional 
                        Neural Network Architectures in Classifying Dhaka City 
                        Traffic”, in review process.</p>
            </div>
        </div>
        </>
       
    );
}

export default About;