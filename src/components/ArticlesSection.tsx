import * as React from 'react';
import styled from 'styled-components';
import Article from './Article.tsx';
import ContactButton from './ContactButton.tsx';

const SectionContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.3rem;
  }
}

  @media (min-width: 768px) {
    padding: 2rem 2rem 3rem 2rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

  @media (min-width: 1200px) {
    width: 1200px;
    padding: 2rem 2rem 3rem 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
  }
`;

const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1rem 0 2rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 2rem 0 3rem 0;
    padding: 0 1rem 0 1rem;
    
  }

  @media (min-width: 1200px) {
    width: 1200px;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const articles = [{
  id: 0,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
}, {
  id: 1,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
}, {
  id: 2,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
}, {
  id: 3,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
}, {
  id: 4,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
}, {
  id: 5,
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
}];

const ArticlesSection: React.FC = () => {

  return (
    <SectionContainer>
      <h2>Also very important title</h2>
      <ArticlesContainer>
        {articles.map((article) => (
          <Article key={article.id} title={article.title} text={article.text} />
        ))}
      </ArticlesContainer>
      <ContactButton />
    </SectionContainer>
  );
};

export default ArticlesSection;
