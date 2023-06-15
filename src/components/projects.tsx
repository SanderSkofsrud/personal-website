import React, { forwardRef } from 'react';

export const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h2>Projects</h2>
      <ul>
        <li>Project Name, Description, Link to GitHub Repo</li>
        <li>Project Name, Description, Link to GitHub Repo</li>
        <li>Project Name, Description, Link to GitHub Repo</li>
        <li>Project Name, Description, Link to GitHub Repo</li>
      </ul>
    </div>
  );
});