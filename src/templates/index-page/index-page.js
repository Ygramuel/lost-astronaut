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
    <div className={style.index}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1 className={style.title}>{title}</h1>
      <img className={style.titelbild} src={image}/>

      <div className={style.slogan}>
        <h6>{slogan.title}</h6>
        <p>{slogan.text}</p>
      </div>

      {/* Alle Feature Elemente */}
      <div className={style.features}>
      <Zeile
        elements=
          {features.map((feature) =>
            <Feature  text={feature.text}
                      title={feature.title}
                      image={feature.image} />
        )}/>
      </div>

      <img className={style.mockup} src={mockupImage}/>

      {/* Profil */}
      <div className={style.profil}>
        <h5>{box.title}</h5>
        <p>{box.text}</p>
      </div>

      {/* Alle Portfolio Elemente */}
      <div className={style.portfolios}>
        {portfolios.map((portfolio) =>
          <Link to={portfolio.url}>
            <h1>{portfolio.title}</h1>
            <img src={portfolio.image} />
          </Link>

      )}
      </div>

      {/* Alle Kunden Elemente */}
      <div className={style.kunden}>
        <h5>{kundenTitle}</h5>
        <Zeile elements={kunden.map((kunde) =>
          <a href={kunde.url}>
            <img src={kunde.image}/>
            {/*<p>{kunde.name}</p>*/}
          </a>
        )} />
      </div>

      {/* Kontakt */}
      <div className={style.kontakt}>
        <img className={style.kontaktimage} src={kontakt.image} />
        <div className={style.kontaktinhalt}>
          <h3>{kontakt.title}</h3>
          <p>{kontakt.text}</p>
          <Button path={kontakt.path} title={kontakt.buttontext} />
        </div>
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
