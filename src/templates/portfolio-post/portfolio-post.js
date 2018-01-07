import React from 'react';
import Helmet from 'react-helmet';

import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import TextBox from '../../components/TextBox/TextBox'
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'

import data from './data.json'
import style from "./portfolio-post.module.less";

export const PortfolioPostTemplate =
  ({ text, title, image, description, body, category, service }) => {

  return (
    <section>
      <DefaultPage image={image}/>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={style.post}>
        <TextBox title={title} subtitle={description} text={body} />

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
          <SimpleSlider>
            <img src={image} />
            <img src={image} />
            <img src={image} />
          </SimpleSlider>
        </div>
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
