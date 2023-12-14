import React from "react";
import passgenimg from '../../assets/images/passgen.png';
import facerecimg from '../../assets/images/facerec.png';
import gitimg from '../../assets/images/github.png';

import './Projects.css';

function Projects() {
    return (
        <section>

            <div className="projects">
                <h2>Projects</h2>
            </div>

            <div className="grid-container">

                <div className="tile">
                    <div className="facerec">
                        <div className="image-section">
                            <img src={facerecimg} />
                        </div>    
                        <div className="text-section">
                            <h2 className="title">Facial Recognition</h2>
                            <p className="bio">A real-time facial recogntion program built using libraries such as OpenCV, NumPy and PySide6. It uses the Haar Cascade classification method</p>    
                            <a href="https://github.com/benhix/Face-Recognition">
                                <img className="git-link-facerec" src={gitimg} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="tile">
                    <div className="passgen">
                        <div className="image-section">
                            <img src={passgenimg} />
                        </div>    
                        <div className="text-section">
                            <h2 className="title">Password Generator</h2>
                            <p className="bio">Built with React and Tailwind, it has options like enabling punctuation and adding hyphens to make it easier to type</p>    
                            <a href="https://benhix.github.io/Password-Generator/">
                                <p className="demo">Demo</p>
                            </a>
                            <a href="https://github.com/benhix/Password-Generator">
                                <img className="git-link-passgen" src={gitimg} />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Projects;