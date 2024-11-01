import React from 'react';
import styled from 'styled-components';

interface ArticleProps {
  title: string;
  text: string;
}

const Card = styled.article`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    color: #555;
  }
`;

const ArticleCard: React.FC<ArticleProps> = ({ title, text }) => {
  return (
    <Card>
      <h4>{title}</h4>
      <p>{text}</p>
    </Card>
  );
};

export default ArticleCard;
