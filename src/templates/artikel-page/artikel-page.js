import React from 'react';
import { graphql } from 'gatsby'

import largeImage from '../../components/IMGFragment'

import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import Layout from '../../layouts/'


export default({data: {markdownRemark: data } }) => {
  const { title, titleimage } = data.frontmatter
  const text = (<HTMLContent content={data.html} />)
  return (
    <Layout>
    <section>
      <DefaultPage title={title} text={text} image={titleimage} />
    </section>
    </Layout>
    );
}

export const ArtikelPageQuery = graphql`
  query artikelPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        titleimage {...largeImage}
      }
    }
  }
`;
