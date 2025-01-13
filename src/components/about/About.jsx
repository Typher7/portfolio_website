import React from 'react';
import './about.css'
import AboutImg from '../../assets/about2.jpeg';
import Info from './Info';

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description"> 
                    I am deeply enthusiastic about technology and its potential to shape our world. My drive centers on pushing boundaries and fostering an inclusive tech community where diverse ideas thrive. 
                    To get a sense of my contributions to this dynamic field, along with my skills and aspirations, I encourage you to explore my portfolio.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About