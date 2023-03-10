import React from 'react';
import './Technologies.css';
import intrack from './assets/Intrack.png';
import docket from './assets/Docket.png';
import airticket from './assets/Airticket.png';

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
                    <img src={intrack} alt='' />
                </div>
            </div>
            <div className='projects'>
                <div className='description'>
                    <h3>Docket</h3>
                    <p>Docket is a website where users can keep track of 
                        any movies, tv-series, anime, game, books instead of using 
                        multiple sites for the same purpose. It also has features
                        like giving own rating and posting blog about them.
                         </p><br />
                           <p> Utilized - <b>HTML, CSS, JavaScript, jQuery, PHP MySQL</b></p>
                </div>
                <div className='description'>
                    <img src={docket} alt='' />
                </div>
            </div>
            <div className='projects'>
                <div className='description'>
                    <h3>Air Ticket Manager</h3>
                    <p>Air Ticket Manager is a prototype of a simple website created for the 
                        Internet and Web Technology course in my undergrad life 
                        for booking seats and confirm tickets of an air journey. </p><br />
                           <p> Utilized - <b>PHP, JavaScript, HTML, CSS, MySQL</b></p>
                </div>
                <div className='description'>
                    <img src={airticket} alt='' />
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default Technologies;