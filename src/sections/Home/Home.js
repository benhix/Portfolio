import React from "react";
import profile from '../../assets/images/square.png';
import stackimg from '../../assets/images/techstack.png';
import gitimg from '../../assets/images/github.png';

import './Home.css';


function Home() {
    return (
        <section>
            <div className="home">
                <div className="home-main">
                    <div className="profile-image">
                        <img src={profile} />
                    </div>
                        <div className="home-text">
                            <h1>Junior Software Developer 👋🏻</h1>
                            <p className="bio">
                                Hi, I'm Ben Hicks. A passionate Software Developer 
                                from Adelaide, Australia 📍
                            </p>
                            <div className="gitimg">
                                <a href="https://github.com/benhix">
                                    <img src={gitimg} />
                                </a>
                            </div>
                            <div className="stackimg">
                                <img src={stackimg} /> 
                            </div>
                            
                        </div>     
                </div>             
            </div>   
        </section>
    )
}

export default Home;
