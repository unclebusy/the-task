import * as React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton.tsx';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 0.5rem;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  p {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }
  
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Header: React.FC = () => {

  return (<HeaderContainer>
    <HeaderWrapper>
      <p>Some Company</p>
      <ContactButton />
    </HeaderWrapper>
  </HeaderContainer>);

};

export default Header;
