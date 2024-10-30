import * as React from 'react';
import styled  from 'styled-components';

const Footer: React.FC = () => {

  const FooterContainer = styled.footer`
    const FooterContainer = styled.footer\`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  text-align: center;
  
  p{
    font-size: 1rem;
  }
  `

  return (
    <FooterContainer>
      <p>Some Company 2024</p>
    </FooterContainer>
  )
}

export default Footer;
