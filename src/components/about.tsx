// About.tsx

import React, { forwardRef } from "react";

export const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <h1>About</h1>
      {/* Add your content here */}
    </div>
  );
});

