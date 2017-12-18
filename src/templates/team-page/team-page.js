import React from 'react';
import Content, { HTMLContent } from '../../components/Content';

export const TeamPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>Ich bin das Team page TEmplate</div>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <TeamPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />;
};

export const teamPageQuery = graphql`
  query TeamPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
