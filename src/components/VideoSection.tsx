import * as React from 'react';
import styled from 'styled-components';
import 'lite-youtube-embed';

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 1rem;
  background: #e5e4e2;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 1rem 1rem 2rem 1rem;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    padding: 2rem 2rem 3rem 2rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;

  h1 {
    font-size: 1.4rem;
  }

  p {
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 768px;
    text-align: center;

    h1 {
      font-size: 2rem;
      margin: 0.5rem 0 0 0;
    }

    p {
      padding: 0 1rem 0 1rem;
      margin: 0 0 0.5rem 0;
    }
  }

  @media (min-width: 1200px) {
    max-width: 400px;
    text-align: start;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      padding: 0;
      margin-bottom: 1rem;
    }
  }
`;

const VideoContainer = styled.aside`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  lite-youtube {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 560px;
  }
`;

const VideoSection: React.FC = () => {
  return (
    <SectionContainer>
      <TitleSection>
        <h1>Most important title on the page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultrices, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante.
        </p>
      </TitleSection>
      <VideoContainer>
        <lite-youtube
          videoid="dQw4w9WgXcQ"
          params="autoplay=1&controls=1"
          title="YouTube video player"
        ></lite-youtube>
      </VideoContainer>
    </SectionContainer>
  );
};

export default VideoSection;
