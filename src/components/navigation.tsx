// Navigation.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './about';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import References from './references';
import Navbar from './navbar';
import NotFound from './not-found';

const Navigation: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/references" element={<References />} />
                <Route path="/" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
