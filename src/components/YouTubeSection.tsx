import * as React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background: #e5e4e2;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (min-width: 1200px) {
    width: 1200px;
    padding: 2rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const YouTubeSection: React.FC = () => {
  return (
    <SectionContainer>
      <TitleSection>
        <Title>Most important title on the page</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultrices, sem urna
          convallis metus, vel suscipit nibh lacus tincidunt ante.
        </Description>
      </TitleSection>
      <VideoContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </SectionContainer>
  );
};

export default YouTubeSection;


