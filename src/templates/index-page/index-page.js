import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

import style from "./index-page.module.less"

import Feature from './Feature'
import Zeile from './Zeile'
import Button from '../../components/Button/Button'

export const IndexPageTemplate =
  ({ title, content, image, slogan, kunden, box, features, mockupImage, kundenTitle, kontakt, portfolios}) => {
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

      {/* Alle Portfolio Elemente */}
      <div>
        {portfolios.map((portfolio) =>
          <Link to={portfolio.url}>
            <h1>{portfolio.title}</h1>
            <img src={portfolio.image} />
          </Link>

      )}
      </div>

      {/* Alle Kunden Elemente */}
      <div>
        <h5>{kundenTitle}</h5>
        <Zeile elements={kunden.map((kunde) =>
          <a href={kunde.url}>
            <img src={kunde.image}/>
            {/*<p>{kunde.name}</p>*/}
          </a>
        )} />
      </div>

      {/* Kontakt */}
      <div>
        <img src={kontakt.image} />
        <h3>{kontakt.title}</h3>
        <p>{kontakt.text}</p>

        <Button path={kontakt.path} title={kontakt.buttontext} />
      </div>
    </div>
  )
}

// TODO fix this mess.
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
    kontakt={post.frontmatter.kontakt}
    portfolios={post.frontmatter.portfolios}
  />;
};

// TODO use fragments and components
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
        kontakt{
          title
          text
          image
          path
          buttontext
        }
      }
    }
  }
`;
