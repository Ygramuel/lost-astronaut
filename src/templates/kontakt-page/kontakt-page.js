import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import KontaktForm from '../../components/KontaktForm/KontaktForm'


export const KontaktPageTemplate = ({ title, text, image }) => {
  return (
    <section>
      <DefaultPage title={title} text={text} image={image} />
      <KontaktForm />
    </section>
    );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <KontaktPageTemplate
    title={post.frontmatter.title}
    text={<HTMLContent content={post.html} />}
    image={post.frontmatter.image}
  />;
};

export const KontaktPageQuery = graphql`
  query kontaktPage($path: String!) {
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
