import * as React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton.tsx';

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #e5e4e2;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 1rem 2rem 1rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    padding: 2rem 2rem 3rem 2rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const LessSection: React.FC = () => {
  return (
    <SectionContainer>
      <h3>Less important title</h3>
      <ContactButton />
    </SectionContainer>
  );
};

export default LessSection;
