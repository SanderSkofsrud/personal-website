//NavBar

import React, { RefObject } from "react";

interface NavBarProps {
  sections: string[];
  refs: RefObject<HTMLDivElement>[];
}

export const NavBar: React.FC<NavBarProps> = ({ sections, refs }) => {
  const handleClick = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <h1 style={{ fontSize: "100px", color: "red" }}>SITE IS CURRENTLY UNDER CONSTRUCTION</h1>      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <button onClick={() => handleClick(refs[index])}>
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

