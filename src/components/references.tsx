import React, { forwardRef } from 'react';

export const References = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h2>References</h2>
      <ul>
        <li>Reference Name, Job Title, Company Name, Contact Information</li>
        <li>Reference Name, Job Title, Company Name, Contact Information</li>
      </ul>
    </div>
  );
});