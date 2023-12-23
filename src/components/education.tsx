import React, { forwardRef } from "react";
import './css/base.css';

export const Education = forwardRef<HTMLDivElement>((props, ref) => {
    // Example content, replace with your actual data
    const educationDetails = [
        { title: 'Bachelor Degree', location: 'Norwegian University of Science and Technology', description: 'Bachelor\'s degree in Computer Science', date: 'August 2022 - Today\'s Date' },
        { title: 'High School', location: 'Askim VGS', description: 'Study Specialization', date: 'August 2019 - June 2022' },
        // ... add more items as needed
    ];

    return (
        <div ref={ref} className="education-container">
            <h1>Education</h1>
            <ul className="card-list">
                {educationDetails.map((detail, index) => (
                    <li key={index} className="card-list-item">
                        <strong>{detail.title}:</strong> {detail.location} <br/> {detail.description} <br/> <span className="weak-text">{detail.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
});
