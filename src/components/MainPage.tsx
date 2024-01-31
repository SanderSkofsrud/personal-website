import React, { createRef } from "react";
import { Navbar } from "./Navbar";
import TransitionSection from "./Header";
import { About } from "./About";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import Footer from "./Footer";

export const MainPage: React.FC = () => {
    const sections = ["about", "education", "experience", "projects"];
    const refs = sections.map(() => createRef<HTMLDivElement>());

    return (
        <main>
            <Navbar sections={sections} refs={refs} />
            <TransitionSection />
            <About ref={refs[0]} />
            <Education ref={refs[1]} />
            <Experience ref={refs[2]} />
            <Projects ref={refs[3]} />
            <Footer />
        </main>
    );
};
