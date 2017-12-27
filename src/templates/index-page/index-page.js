import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import Feature from './Feature'
import Zeile from './Zeile'

export const IndexPageTemplate =
  ({ title, content, image, slogan, kunden, box, features, mockupImage, kundenTitle}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{title}</h1>
      <img src={image}/>

      <div>
        <h6>{slogan.title}</h6>
        <p>{slogan.text}</p>
      </div>

      {/* Alle Feature Elemente */}
      <Zeile
        elements=
          {features.map((feature) =>
            <Feature  text={feature.text}
                      title={feature.title}
                      image={feature.image} />
        )}/>

      <img src={mockupImage}/>

      {/* Profil */}
      <div>
        <h5>{box.title}</h5>
        <p>{box.text}</p>
      </div>

      {/* Alle Kunden Elemente */}
      <div>
        <h5>{kundenTitle}</h5>
        {kunden.map((kunde) =>
          <a href={kunde.url}>
            <img src={kunde.image}/>
            <p>
              {kunde.name}
            </p>
          </a>
        )}
      </div>
      <a href={box.url}>
        <p>{box.text}</p>
      </a>
    </div>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <IndexPageTemplate
    title={post.frontmatter.title}
    image={post.frontmatter.image}
    slogan={post.frontmatter.slogan}
    features={post.frontmatter.features}
    box={post.frontmatter.box}
    mockupImage={post.frontmatter.mockupimage}
    kundenTitle={post.frontmatter.kunden.title}
    kunden={post.frontmatter.kunden.kunde}
  />;
};

export const indexPageQuery = graphql`
  query IndexPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        image
        slogan{
          title
          text
        }
        features{
          title
          image
          text
        }
        mockupimage
        box {
          title
          text
        }
        portfolios{
          title
          url
          image
        }
        kunden{
          title
          kunde{
            name
            image
            url
          }
        }

      }
    }
  }
`;
