import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'

export const PortfolioPostTemplate = ({ text, title, image }) => {
  return (
    <section>
      <DefaultPage title={title} text={text} image={image} />
      <h3>Gallerie:</h3>
      <p>Das ist ein TODO. Sagt mir wie es aussehen soll... </p>
    </section>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <PortfolioPostTemplate
    text={<HTMLContent content={post.html} />}
    title={post.frontmatter.title}
    image={post.frontmatter.image}
  />;
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        image
        title
        description
      }
    }
  }
`;
