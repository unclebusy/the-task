import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainPage from './pages/MainPage.tsx';
import ContactUsPage from './pages/ContactUsPage.tsx';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="contact" element={<ContactUsPage />} />
          </Routes>
        </MainContainer>
        <Footer />
      </Router>
    </AppContainer>
  );
};

export default App;
