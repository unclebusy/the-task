import * as React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background-color: #e5e4e2;
  
  @media (min-width: 1200px) {
    width: 1200px;
    padding: 2rem;
    font-size: 2rem;
  }
`;

const ContactUs: React.FC = () => {
  return (
    <SectionContainer>
      <h1>Only CTA on the page</h1>
      <ContactForm />
    </SectionContainer>
  )
};

export default ContactUs;
