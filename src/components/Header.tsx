import React from 'react';
import styled from 'styled-components';

// Styled component for the transition
const TransitionShape = styled.div`
  width: 100%;
  height: 100px; // Adjust height as necessary
  background-color: #000; // Match this to your NavBar background color
  clip-path: polygon(0 0, 100% 0, 50% 100%);
`;

const TransitionSection: React.FC = () => {
    return <TransitionShape />;
};

export default TransitionSection;
