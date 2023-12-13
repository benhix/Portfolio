import React from "react";
import passgenimg from '../../assets/images/passgen.png';
import facerecimg from '../../assets/images/facerec.png';

import './Projects.css';

function Projects() {
    return (
        <section>

            <div className="projects-title">
                <h2>Projects</h2>
            </div>

            <div className="grid-container">
                <div className="passgen">
                    <div className="passgen-image">
                        <img src={passgenimg} />
                    <div className="text-section">
                        <h2 className="title">Password Generator</h2>
                        <p className="bio">Cybersecurity is a passion for me so it seemed obvious to design a password generator. Built with React and Tailwind, it has options like enabling punctuation and adding hyphens to make it easier to type.</p>
                    </div>
                </div>

                <div className="facerec">
                    <div className="image-section">
                        <img src={facerecimg} />
                        <div className="facerec-text">
                            <h2 className="title">Facial Recognition</h2>
                            <p className="bio">Cybersecurity is a passion for me so it seemed obvious to design a password generator. Built with React and Tailwind, it has options like enabling punctuation and adding hyphens to make it easier to type.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Projects;