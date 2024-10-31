import * as React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);

  p {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1rem;

    p {
      font-size: 1rem;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Some Company 2024</p>
    </FooterContainer>
  );
};

export default Footer;
