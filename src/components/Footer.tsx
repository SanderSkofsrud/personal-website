import React from 'react';
import { CSSProperties } from 'react';
import linkedinImage from './images/linkedin.png'; // Update this path as per your folder structure
import githubImage from './images/github.png';    // Update this path as per your folder structure

const Footer: React.FC = () => {
    const footerStyle: CSSProperties = {
        width: '100%',
        textAlign: 'center', // This will now be correctly typed
        padding: '10px 0'
    };

    const imageStyle: CSSProperties = {
        width: '100px',
        height: 'auto',
        margin: '0 30px',
        marginTop: '30px',
        marginBottom: '30px',
        cursor: 'pointer'
    };

    const barStyle: CSSProperties = {
        backgroundColor: 'gray',
        height: '2px',
        width: '100%'
    };

    return (
        <footer style={footerStyle}>
            <div style={barStyle}></div>
            <a href="https://www.linkedin.com/in/sander-rom-skofsrud-a47522280/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImage} alt="LinkedIn" style={imageStyle} />
            </a>
            <a href="https://github.com/SanderSkofsrud/" target="_blank" rel="noopener noreferrer">
                <img src={githubImage} alt="GitHub" style={imageStyle} />
            </a>
        </footer>
    );
};

export default Footer;
