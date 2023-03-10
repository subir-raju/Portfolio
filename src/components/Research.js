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
            <div className='prevresearch-div'>
                <h3>Previous Research Experiences</h3>
                <p> I have worked with then chairman of the 
                    ECE department of North South University, 
                    Dr. K. M. A. Salam in a senior design project
                     and had experience to do research under his supervision on
                      enhencing industrial outcome through the interaction
                      of human and machine by means of using feasible and
                      interacting web-apps. I also had research experience with 
                      Mr. Sayed Athar Bin Amir, Lecturer(NSU), in Directive Research course. 
                      Identify the different vehicles found in Dhaka City using vaious CNN architectures 
                      and then comparing their efficiency in terms of accuracy was our foucus. </p>
            </div>
            <div className='prevresearch-div'>
                <h3>My Papers</h3>
                <p>Mushfiqur Rahman Chowdhury, <b>Subir Dey Raju</b>, Lubba Saha,
                     K. M. A. Salam, “Implementation of a Web- based Technology 
                     for Tracking Readymade Garments Manufacturing Defects” 2021 
                     International Conference on Intelligent Technologies, Karnataka,
                      India.<br/>
                      <a href='https://doi.org/10.1109/CONIT51480.2021.9498295'>Click for the paper</a></p>
                      <p><b>Subir Dey Raju</b>, Fahimul Hoque Shuvo, Sana Sanzida, Fahim Iftekhar, 
                        Syed Athar Bin Amir, “Comparison of Different Convolutional 
                        Neural Network Architectures in Classifying Dhaka City 
                        Traffic”, in review process.</p>
            </div>
        </div>
        </>
       
    );
}

export default About;