import React, { forwardRef, useState, useEffect, RefObject, useRef } from "react";
import menuImage from "./images/menu.png";
import closeImage from "./images/close.png";
import "./css/base.css";

interface NavBarProps {
  sections: string[];
  refs: RefObject<HTMLDivElement>[];
}

export const NavBar: React.FC<NavBarProps> = ({ sections, refs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // New state

  const updateMobileView = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    const handleResize = () => {
      updateMobileView();
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleClick = (ref: RefObject<HTMLDivElement>, index: number) => {
    const element = ref.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      const navbarHeight = navbarRef.current?.getBoundingClientRect().height ?? 0;
      const offset = top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setMenuOpen(false);

      // Estimate the duration of the scrolling animation
      const scrollDuration = Math.abs(window.scrollY - offset) / 2; // This assumes a speed of 2 pixels/ms, adjust as needed

      // Set the active index after the estimated scrolling duration
      setTimeout(() => {
        setActiveIndex(index);
        setIsScrolling(false);
      }, scrollDuration);
    }
  };


  useEffect(() => {
    const options = {
      rootMargin: `-${navbarRef.current?.getBoundingClientRect().height ?? 0}px 0px 0px 0px`,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!isScrolling && entry.isIntersecting && entry.intersectionRatio >= options.threshold) {
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
  }, [refs, navbarRef, isScrolling]);

  useEffect(() => {
    const handleScrollEnd = () => {
      setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScrollEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);

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
                  {section.toUpperCase()}
                </button>
              </li>
          ))}
        </ul>
      </nav>
  );
};
