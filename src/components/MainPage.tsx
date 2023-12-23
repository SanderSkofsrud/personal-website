import React, { createRef } from "react";
import { NavBar } from "./NavBar";
import TransitionSection from "./Header";
import { About } from "./About";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { References } from "./References";

export const MainPage: React.FC = () => {
  const sections = ["about", "education", "experience", "projects", "references"];
  const refs = sections.map(() => createRef<HTMLDivElement>());

  return (
    <main>
      <NavBar sections={sections} refs={refs} />
      <TransitionSection />
      <About ref={refs[0]} />
      <Education ref={refs[1]} />
      <Experience ref={refs[2]} />
      <Projects ref={refs[3]} />
      <References ref={refs[4]} />
    </main>
  );
};

