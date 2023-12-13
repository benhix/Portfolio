import React from "react";
import image from '../../assets/images/duck.jpg';

import './Projects.css';

function Projects() {
    return (
        <section>
            <div class="grid-container">
                <div class="grid-item image">
                    <img src={image} />
                </div>
                <div class="grid-item text">
                    <h2 className="title">Password Generator</h2>
                    <p className="bio">foo bar baz</p>
                </div>

                <div class="grid-item text">
                    <h2 className="title">Face Recognition</h2>
                    <p className="bio">foo bar baz</p>
                </div>
                <div class="grid-item image">
                    <img src={image} />
                </div>
                

                
            </div>

        </section>
    )
}

export default Projects;