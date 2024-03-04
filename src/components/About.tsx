import React, { forwardRef } from 'react';
import profileImage from './images/meg.jpg'; // Ensure the path is correct
import './css/base.css';

export const About = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="about-container">
            <div className="about-image">
                <img src={profileImage} alt="An image of me" />
            </div>
            <div className="about-text">
                <h1>About Me</h1>
                <p>
                    My name is Sander Rom Skofsrud, and I am a 20 year old Computer
                    Science student at the Norwegian University of Science and
                    Technology (NTNU) in Trondheim, Norway.
                </p>
                <p>
                    I am currently in my 2nd year of my bachelor's degree in Computer Science.
                    I have experience with Java, Python, JavaScript, HTML, CSS, React, React Native, SQL, Git, and more, and I am always eager to learn more!
                </p>
            </div>
        </div>
    );
});
