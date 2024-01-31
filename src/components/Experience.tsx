import React, { forwardRef } from 'react';

export const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const experienceDetails = [
    { title: 'Teaching Assistant',
      location: 'Norwegian University of Science and Technology',
      description: 'Teaching assistant in the course INGT 1002 - Programming,' +
          ' numeracy and security at NTNU Trondheim. Consists of helping students ' +
          'understand and learn the core mechanics and concepts in python,' +
          ' some core concepts in numeracy and the fundamentals behind IT security.',
      date: 'August 2023 - December 2023' },
    { title: 'Teaching Assistant',
      location: 'Norwegian University of Science and Technology',
      description: 'Teaching assistant in the course IDATT 2003  - Programming 2.' +
          ' Consists of helping students learn more advanced concepts in Java,' +
          ' such as object oriented programming, inheritance, polymorphism, and more.' +
          ' Also has a core focus on guiding students through the process of creating' +
          ' a larger project, consisting of both a complex backend and a GUI.',
      date: 'January 2024 - June 2024' },
  ];

  return (
      <div ref={ref} className="education-container">
        <h1>Experience</h1>
        <ul className="card-list">
          {experienceDetails.map((detail, index) => (
              <li key={index} className="card-list-item">
                <strong>{detail.title}:</strong> {detail.location} <br/> {detail.description} <br/> <span className="weak-text">{detail.date}</span>
              </li>
          ))}
        </ul>
      </div>
  );
});