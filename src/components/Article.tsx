import * as React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  p {
    color: gray;
  }
`;

interface ArticleProps {
  title: string;
  text: string;
}

const Article: React.FC<ArticleProps> = ({ title, text }) => {
  return (
    <ArticleContainer>
      <h4>{title}</h4>
      <p>{text}</p>
    </ArticleContainer>
  );
};

export default Article;
