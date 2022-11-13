import React from 'react';
import './About.css';
import aboutPic from "../../Images/break.png"

const About = () => {
    return ( 
        <section className='about-container'>
            <img src={aboutPic} className='about-photo' alt="vail mountain"/>
            <div className='about-text'>
                <h2 className='mission-statement'>Mission Statement:</h2>
                <p> Over the past two decades the corporitization of Colorado's Ski and Snowboard industry has made it difficult
                for both locals and tourists alike to get reliable resort information without spending significant time on the web.
                First Chair Colorado provides a single resource encompassing all of Colorados ski resort's allowing quick access to 
                up to date trail maps, live webcams, and lift tickets.</p>
                <p> Planning a trip with your family and dont know which resort you'd like to ski? First Chair Colorado allows you to browse all 
                of Colorado's resorts with your estimated trip time from Denver(winter driving / traffic), skiiable acres, trails, vertical
                and annual snowfall. Are you a local who is indecisive on which resort you'd like to ride in the morning?  Follow our links
                to live resort webcams and weather updates with just a click. Feeling adventurous and wanting to go into the backcountry?  
                We've got you covered with direct links to book your snowcat or heli-skiing trips in Steamboat or Silverton.</p> 
            </div>
        </section>
     );
}

export default About;