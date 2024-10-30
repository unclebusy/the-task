import * as React from 'react';
import styled from 'styled-components';
import VideoSection from '../components/VideoSection.tsx';
import ArticlesSection from '../components/ArticlesSection.tsx';
import LessSection from '../components/LessSection.tsx';

const Main: React.FC = () => {
  return <>
    <VideoSection />
    <ArticlesSection />
    <LessSection />
  </>
};

export default Main;
