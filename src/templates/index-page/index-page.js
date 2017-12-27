import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

export const IndexPageTemplate =
  ({ title, content, image, slogans, kunden, box}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{title}</h1>
      <img src={image}/>
      <div>
        {slogans.map((slogan) =>
          <p>{slogan.slogan}</p>
        )}
      </div>
      <div>
        {kunden.map((kunde) =>
          <a href={kunde.url}>
            <img src={kunde.bild}/>
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
    slogans={post.frontmatter.slogans}
    kunden={post.frontmatter.kunden}
    content={<HTMLContent content={post.html} />}
    box={post.frontmatter.box}
  />;
};

export const indexPageQuery = graphql`
  query IndexPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
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
        mockupImage
        box {
          title
          text
        }
        kunden {
          bild
          name
          url
        }
      }
    }
  }
`;
