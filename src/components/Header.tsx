import * as React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton.tsx';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  text-align: center;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
  p {
    font-size: 1.5rem;
  } 
`;

const Header = () => {

  return (<HeaderContainer>
    <p>Some Company</p>
    <ContactButton />
  </HeaderContainer>);

};

export default Header;
