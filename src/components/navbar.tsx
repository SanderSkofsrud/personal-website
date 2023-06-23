import React, { forwardRef, useState, useEffect, RefObject, useRef } from "react";
import "./css/base.css";

interface NavBarProps {
  sections: string[];
  refs: RefObject<HTMLDivElement>[];
}

export const NavBar: React.FC<NavBarProps> = ({ sections, refs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  
  const updateMobileView = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  window.addEventListener('resize', updateMobileView);

  const handleClick = (ref: RefObject<HTMLDivElement>, index: number) => {
    const element = ref.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      const navbarHeight = navbarRef.current?.getBoundingClientRect().height ?? 0;
      const offset = top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveIndex(index);
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    const options = {
      rootMargin: `-${navbarRef.current?.getBoundingClientRect().height ?? 0}px 0px 0px 0px`,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= options.threshold) {
          const index = refs.findIndex((ref) => ref.current === entry.target);
          setActiveIndex(index);
        }
      });
    }, options);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, navbarRef]);

  return (
    <nav className="sticky" ref={navbarRef}>
      <h1>SITE IS CURRENTLY UNDER CONSTRUCTION</h1>
      <button className="menu-button" onClick={() => setIsMobileView(!isMobileView)}>
        {isMobileView ? "Close" : "Menu"}
      </button>
      <ul className={isMobileView ? "mobile-menu" : "desktop-menu"}>
        {sections.map((section, index) => (
          <li key={index}>
            <button
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleClick(refs[index], index)}
            >
              {section.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};