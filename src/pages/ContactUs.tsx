import * as React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm.tsx';

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

    h1 {
      margin-bottom: 3rem;
    }
  }
`;

const ContactUs: React.FC = () => {
  return (
    <SectionContainer>
      <h1>Only CTA on the page</h1>
      <ContactForm />
    </SectionContainer>
  );
};

export default ContactUs;
