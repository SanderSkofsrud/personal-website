import React, { forwardRef } from 'react';

export const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projectDetails = [
    {
      title: 'Adventure Game Engine (Paths)',
      course: 'IDATT2001 - Programming 2',
      description: 'The task was to create a text-based adventure game engine in Java, using JavaFX for the GUI. ' +
          'The game should allow the user to import their own stories and maneuver through them. ' +
          'The game should also have a clear and easy to use graphical user interface. ' +
          'The game engine is available at the GitHub repository, although the API key for the translator API is no longer valid.',
      grade: 'A',
      github: 'https://github.com/SanderSkofsrud/paths'
    },
    {
      title: 'Public Budgeting Software (PBS)',
      course: 'IDATT1002 - Systems Development 1',
      description: 'This was 45% of the grade for the course IDATT 1002 - Systems Development 1. ' +
          'The focus was on working as a team to develop a private budgeting software that a user can ' +
          'utilize to gain a larger control over their own finances. The code is available at the GitHub repository. ' +
          'The total work also includes a 160 page report, which is not included in this portfolio. ' +
          'It contains everything from the development process, notes from meetings, ' +
          'the improvements of the code, the strategies used, as well as all the functionality of the software.',
      grade: 'B',
      github: 'https://github.com/SanderSkofsrud/PBS'
    },
  ];

  return (
      <div ref={ref} className="education-container">
        <h1>Education</h1>
        <ul className="card-list">
          {projectDetails.map((detail, index) => (
              <li key={index} className="card-list-item">
                <strong>{detail.title}:</strong> {detail.course} <br/> {detail.description} <br/> Grade: {detail.grade} <br/>
                <a href={detail.github} target="_blank" rel="noopener noreferrer" className="weak-text">{detail.github}</a>
              </li>
          ))}
        </ul>
      </div>
  );
});
