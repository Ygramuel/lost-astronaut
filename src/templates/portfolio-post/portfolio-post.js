import React from 'react';

import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import data from './data.json'
import style from "./portfolio-post.module.less";

export const PortfolioPostTemplate =
  ({ text, title, image, description, body, category, service }) => {

  return (
    <section className={style.post}>
      <DefaultPage image={image}/>
      <div className={style.textbox}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.subtitle}>{description}</div>
        <div className={style.text}>{body}</div>
      </div>

      <div className={style.infobox}>
        <h4 className={style.subtitle}>{data.bereich}</h4>
        <div className={style.text}>{data.bereiche[category]}</div>

        <h4 className={style.subtitle}>{data.section}</h4>
        <ul className={style.icons}>
          {service.map((element) =>
            <li>{element.name}</li>
          )}
        </ul>
      </div>
      <div className={style.gallery}>
        <h3>Gallerie:</h3>
        <p>TODO</p>
      </div>
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
