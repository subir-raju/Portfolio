import React from 'react';
import Navbar from './Navbar';
import './Section.css';
import './Resume.css';

const Tebular_Format_URL='http://localhost:3001/Resume/Tebular/CV_SubirDeyRaju.pdf'
const Normal_Format_URL='http://localhost:3001/Resume/Normal/CV_SubirDeyRaju.pdf'

const Contact = () => {
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
        <>
        <Navbar />
    
        <div className='container-home'>
            <div className='contact-note'>
                <h3>Click here to download my resume in Tebular format</h3>
                <button onClick={()=>{downloadFileAtURL(Tebular_Format_URL)}}>Download Resume in Tebular Format</button>
                <h3>Click here to download my resume in Original Format</h3>
                <button onClick={()=>{downloadFileAtURL(Normal_Format_URL)}}>Download Normal Format</button>
            </div>
         </div>
        </>
        
    );
}

export default Contact;