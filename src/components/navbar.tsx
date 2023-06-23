import React, { forwardRef, useState, useEffect, RefObject, useRef } from "react";
import "./css/base.css";

interface NavBarProps {
  sections: string[];
  refs: RefObject<HTMLDivElement>[];
}

export const NavBar: React.FC<NavBarProps> = ({ sections, refs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleClick = (ref: RefObject<HTMLDivElement>, index: number) => {
    const element = ref.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      const navbarHeight = navbarRef.current?.getBoundingClientRect().height ?? 0;
      const offset = top + window.pageYOffset - navbarHeight;
      window.scrollTo(0, offset);
    }
  };
    
  useEffect(() => {
    const options = {
      rootMargin: `-${navbarRef.current?.getBoundingClientRect().height ?? 0}px 0px 0px 0px`,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refs.findIndex(ref => ref.current === entry.target);
          setActiveIndex(index);
        }
      });
    }, options);
  
    refs.forEach(ref => ref.current && observer.observe(ref.current));
  
    return () => refs.forEach(ref => ref.current && observer.unobserve(ref.current));
  }, [refs]);
  
  return (
    <nav className="sticky" ref={navbarRef}>
      <h1>SITE IS CURRENTLY UNDER CONSTRUCTION</h1>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <button
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleClick(refs[index], index)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};