import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

import largeImage from '../../components/IMGFragment'
import Layout from '../../layouts/'
import style from "./index-page.module.less"

import Feature from './Feature'
import Zeile from './Zeile'
import Button from '../../components/Button/Button'
import TextBox from '../../components/TextBox/TextBox'


export default ( {data: {markdownRemark: {frontmatter: data } } }) => {
    const { title, content, titleimage, slogan, kunden, box, features, mockupimage, kontakt, portfolios} = data
  return (
  <Layout>
    <div className={style.index}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1 className={style.title}>{title}</h1>
      <Img className={style.titelbild} {...titleimage.childImageSharp}/>

      <div className={style.slogan}>
        <h2>{slogan.title}</h2>
        <p>{slogan.text}</p>
      </div>

      {/* Alle Feature Elemente */}
      <div className={style.features}>
      <Zeile
        elements=
          {features.map((feature) =>
            <Feature  key={feature.text}
                      text={feature.text}
                      title={feature.title}
                      image={feature.image} />
        )}/>
      </div>

      <Img className={style.mockup} {...mockupimage.childImageSharp}/>

      {/* Profil */}
      <TextBox title={box.title} text={box.text} />

      {/* Alle Portfolio Elemente */}
      <div className={style.portfolios}>
        {portfolios.map((portfolio) =>
          <Link to={portfolio.url} key={portfolio.url}>
            <Img className={style.portfolioBild} alt={portfolio.title} {...portfolio.image.childImageSharp} />
            <h5>{portfolio.title}</h5>
          </Link>

      )}
      </div>

      {/* Alle Kunden Elemente */}
      <div className={style.kunden}>
        <h5>{kunden.titel}</h5>
        <Zeile elements={kunden.kunde.map((kunde) =>
          <a href={kunde.url} key={kunde.url}>
            <img className={style.kunde} src={kunde.image} alt={kunde.name}/>
            {/*<p>{kunde.name}</p>*/}
          </a>
        )} />
      </div>

      {/* Kontakt */}
      <div className={style.kontakt}>
        <Img className={style.kontaktimage} {...kontakt.image.childImageSharp} />
        <div className={style.kontaktinhalt}>
          <h1>{kontakt.title}</h1>
          <p>{kontakt.text}</p>
          <Button path={kontakt.path} title={kontakt.buttontext} />
        </div>
      </div>
    </div>
  </Layout>
  )
}

// TODO fix this mess.
/*export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <IndexPageTemplate
    title={post.frontmatter.title}
    image={post.frontmatter.image}
    slogan={post.frontmatter.slogan}
    features={post.frontmatter.features}
    box={post.frontmatter.box}
    mockupimage={post.frontmatter.mockupimage}
    kundenTitle={post.frontmatter.kunden.title}
    kunden={post.frontmatter.kunden.kunde}
    kontakt={post.frontmatter.kontakt}
    portfolios={post.frontmatter.portfolios}
  />;
};*/


export const portfolioImage = graphql`
fragment portfolioImage on File {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
}
`;


// TODO use fragments and components
export const indexPageQuery = graphql`
  query IndexPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        titleimage{ ...largeImage }


        slogan{
          title
          text
        }
        features{
          title
          image
          text
        }
        mockupimage {...largeImage}
        box {
          title
          text
        }
        portfolios{
          title
          url
          image {... portfolioImage }
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
          image{...largeImage}
          path
          buttontext
        }
      }
    }
  }
`;
