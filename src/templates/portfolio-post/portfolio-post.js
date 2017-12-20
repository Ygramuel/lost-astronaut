import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'

export const BlogPostTemplate = ({ content, contentComponent, description, title }) => {
  const PostContent = contentComponent || Content;
  return (
    <section>
      <DefaultPage title={title} text={content} image="" />
    </section>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <BlogPostTemplate
    content={<HTMLContent content={post.html} />}
    description={post.frontmatter.description}
    title={post.frontmatter.title}
  />;
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
