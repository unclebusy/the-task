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

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    padding: 2rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
  
  @media (min-width: 1200px) {
    width: 1200px;

    h1 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }
`;

const ConfirmationMessage = styled.div`
  font-size: 2rem;
  color: #333;
`;


const ContactUs: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <SectionContainer>
      {isSubmitted ? (
        <ConfirmationMessage>Message generated on the server</ConfirmationMessage>
      ) : (
        <>
          <h1>Only CTA on the page</h1>
          <ContactForm onSubmit={() => setIsSubmitted(true)} />
        </>
      )}
    </SectionContainer>
  );
};

export default ContactUs;
