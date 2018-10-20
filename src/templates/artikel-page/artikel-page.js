import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import Layout from '../../layouts/'

export const ArtikelPageTemplate = ({ title, text, image }) => {
  return (
    <Layout>
      <DefaultPage title={title} text={text} image={image} />
    </Layout>
    );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <ArtikelPageTemplate
    title={post.frontmatter.title}
    text={<HTMLContent content={post.html} />}
    image={post.frontmatter.image}
  />;
};

export const ArtikelPageQuery = graphql`
  query artikelPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }
  }
`;
