import React from "react";
import sattrackimg from '../../assets/images/sat_track2.png';
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
                    <div className="sattrack">
                        <div className="image-section">
                            <img src={sattrackimg} />
                        </div>    
                        <div className="text-section">
                            <h2 className="title">Satellite Tracker</h2>
                            <p className="bio">Search and track satellites in orbit. Built with python using data from N2YO API and Qt for GUI </p>   
                            <a href="https://github.com/benhix/satellite_tracker">
                                <img className="git-link-sattrack" src={gitimg} />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    )
}

export default Projects;