import React from 'react';
import Img from "gatsby-image";

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
  return <div><h1>Image:</h1>
    <Img sizes={post.frontmatter.newimage.childImageSharp.sizes} />
  <KontaktPageTemplate
    title={post.frontmatter.title}
    text={<HTMLContent content={post.html} />}
    image={post.frontmatter.newimage}
  /></div>;
};

export const KontaktPageQuery = graphql`
  query kontaktPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        newimage {
          childImageSharp {
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`;
