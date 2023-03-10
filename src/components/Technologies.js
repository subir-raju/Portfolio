import React from 'react';
import './Technologies.css';
import docket from './assets/Docket.png';

const Technologies = () => {
    return(
        <div class='tech'>
            <div className='tech-header'>
            <h2> Projects I Have Worked On</h2>
            <div className='projects'>
                <div className='description'>
                    <h3>InTrack</h3>
                    <p>In the Senior Design course of my undergraduate final year,
                         built InTrack, which is a software tool to track RMG manufacturing
                          defects using real-time production data. Simple data from the 
                          quality control can provide us with enhanced data-visuals into
                           the overall production line. </p><br />
                           <p> Utilized - <b>React.js, Microsrvice Architecture, MySQL</b></p>
                </div>
                <div className='description'>
                    <img src={docket} alt='' />
                </div>
            </div>
            <div className='projects'>
                <div className='description'>
                    <h3>InTrack</h3>
                    <p>In the Senior Design course of my undergraduate final year,
                         built InTrack, which is a software tool to track RMG manufacturing
                          defects using real-time production data. Simple data from the 
                          quality control can provide us with enhanced data-visuals into
                           the overall production line. </p><br />
                           <p> Utilized - <b>React.js, Microsrvice Architecture, MySQL</b></p>
                </div>
                <div className='description'>
                    <img src={docket} alt='' />
                </div>
            </div>
            <div className='projects'>
                <div className='description'>
                    <h3>InTrack</h3>
                    <p>In the Senior Design course of my undergraduate final year,
                         built InTrack, which is a software tool to track RMG manufacturing
                          defects using real-time production data. Simple data from the 
                          quality control can provide us with enhanced data-visuals into
                           the overall production line. </p><br />
                           <p> Utilized - <b>React.js, Microsrvice Architecture, MySQL</b></p>
                </div>
                <div className='description'>
                    <img src={docket} alt='' />
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default Technologies;