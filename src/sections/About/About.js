import React from "react";
import setupimg from '../../assets/images/minimal_setup.jpeg';

import './About.css';

function About() {
    return (
        <section className="about-section">
            <h2 className="about-title">About Me</h2>
            <div className="about">
                <div className="life-story">
                    <p className="about-content">As a self-taught software developer, I have a deep-rooted fascination with the binary world. My journey over the past year has been an immersive exploration into programming and development. During this period, I have honed my proficiency in languages such as Python, C++, JavaScript, C#, HTML and CSS. My knowledge extends to frameworks like React and ASP.NET (Blazor), equipping me with a robust toolkit to tackle any software challenges. I'm a team player and thrive when working with others
                    </p>
                </div>
                
                <div className="about-image">
                    <img src={setupimg} />
                </div>
                
            </div>
        </section>
    )
}

export default About;

