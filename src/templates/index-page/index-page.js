import React from 'react';
import Content, { HTMLContent } from '../../components/Content';

export const IndexPageTemplate = ({ title, content, contentComponent, image, slogans, kunden}) => {
  return (
    <div>
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
    </div>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <IndexPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    image={post.frontmatter.image}
    slogans={post.frontmatter.slogans}
    kunden={post.frontmatter.kunden}
    content={post.html}
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
        slogans{
          slogan
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
