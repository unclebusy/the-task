import React, { useState } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PlaceholderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

const PlayButton = styled.button`
  position: absolute;
  width: 68px;
  height: 48px;
  background: url('https://img.icons8.com/ios-filled/100/ffffff/play-button-circled.png')
    no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
`;

const LazyLoadYouTube: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <VideoContainer onClick={handleLoadVideo}>
      {!isVideoLoaded ? (
        <>
          <PlaceholderImage
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
            alt="YouTube video preview"
          />
          <PlayButton aria-label="Play Video" />
        </>
      ) : (
        <VideoIframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </VideoContainer>
  );
};

export default LazyLoadYouTube;
