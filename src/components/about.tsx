// About.tsx

import React, { forwardRef } from "react";
//import "./glint/css/base.css";
//import "./glint/css/vendor.css";
//import "./glint/css/main.css";
//import "./glint/css/fonts.css";
import "./css/base.css";

export const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>About</h1>
      {/* Add your content here */}
      <p>Test</p>
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </div>
  );
});

