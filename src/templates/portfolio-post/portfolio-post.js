import React from 'react';

import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import data from './data.json'

export const PortfolioPostTemplate =
  ({ text, title, image, description, body, category, service }) => {

  return (
    <section>
      <DefaultPage image={image}/>
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
        <div>{body}</div>
      </div>

      <div>
        <h4>{data.bereich}</h4>
        <div>{data.bereiche[category]}</div>

        <h4>{data.section}</h4>
        <ul>
          {service.map((element) =>
            <li>{element.name}</li>
          )}
        </ul>
      </div>
      <h3>Gallerie:</h3>
      <p>TODO</p>
    </section>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  post.frontmatter.body = <HTMLContent content={post.body} />
  return <PortfolioPostTemplate
    body={<HTMLContent content={post.html} />}
    title={post.frontmatter.title}
    image={post.frontmatter.image}
    description={post.frontmatter.description}
    category={post.frontmatter.category}
    service={post.frontmatter.service}
  />;
}

export const portfolioQuery = graphql`
  query portfolioPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        image
        title
        description
        category
        service {
          name
        }
        icons{
          icon
        }
        gallery{
          image
        }
      }
    }
  }
`;
