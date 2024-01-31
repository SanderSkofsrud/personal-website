import React, { forwardRef, useState, useEffect, useRef, RefObject } from 'react';
import menuImage from './images/menu.png'; // Assuming you have these images
import closeImage from './images/close.png';
import './css/base.css'; // Assuming this is your CSS file

interface NavBarProps {
  sections: string[];
  refs: RefObject<HTMLDivElement>[];
}

export const Navbar: React.FC<NavBarProps> = ({ sections, refs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMobileView = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    const handleResize = () => {
      updateMobileView();
    };

    window.addEventListener('resize', handleResize);

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
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setMenuOpen(false);
      setActiveIndex(index);
    }
  };

  // Calculate the offset top positions of each section
  const sectionOffsets = useRef<number[]>([]);
  useEffect(() => {
    sectionOffsets.current = refs.map(ref => ref.current ? ref.current.offsetTop : 0);
  }, [refs]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScrollPosition = documentHeight - windowHeight;

      // Check if the user has scrolled to the bottom of the page
      if (scrollPosition >= maxScrollPosition) {
        setActiveIndex(refs.length - 1); // Set the last item as active
        return;
      }

      const activeSectionIndex = sectionOffsets.current.findIndex((offset, index, arr) => {
        const nextOffset = arr[index + 1] || maxScrollPosition;
        return scrollPosition >= offset && scrollPosition < nextOffset;
      });

      if (activeSectionIndex !== -1 && activeSectionIndex !== activeIndex) {
        setActiveIndex(activeSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, refs.length]);


  return (
      <nav className="sticky" ref={navbarRef}>
        <h1>SITE IS CURRENTLY UNDER CONSTRUCTION</h1>

        <ul>
          {sections.map((section, index) => (
              <li key={index}>
                <button
                    className={index === activeIndex ? 'active' : ''}
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
