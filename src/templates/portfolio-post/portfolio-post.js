import React from 'react';
import Helmet from 'react-helmet';

import { graphql } from 'gatsby'
import largeImage from '../../components/IMGFragment'

import Content, { HTMLContent } from '../../components/Content';
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import TextBox from '../../components/TextBox/TextBox'
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'

import data from './data.json'
import style from "./portfolio-post.module.less";

import Layout from '../../layouts/'

export const PortfolioPostTemplate =
  ({ text, title, titleimage, description, body, category, service, icons, gallery }) => {

  return (
    <Layout>
      {/* Title image */}
      <DefaultPage image={titleimage}/>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {/* First Text-Row */}
      <div className={style.post}>

        {/* Left side */}
        <TextBox title={title} subtitle={description} text={body} />

        {/* Right side */}
        <div className={style.infobox}>
          <h4 className={style.subtitle}>{data.bereich}</h4>
          <div className={style.text}>{data.bereiche[category]}</div>

          {/* Services */}
          <h4 className={style.subtitle}>{data.service}</h4>
          <ul className={style.list}>
            {service.map((element) =>
              <li key={element.name}>
                {element.name}
              </li>
            )}
          </ul>
          {/* Icons */}
          <ul className={style.list}>
            {icons.map((image) =>
              <li key={image.icon}>
                <img src={encodeURI(image.icon)} alt="" />
              </li>
            )}
          </ul>
        </div>
        <div className={style.gallery}>
          <SimpleSlider>
            {gallery.map((image) =>
              <img key={image.image} src={encodeURI(image.image)} />
            )}
          </SimpleSlider>
        </div>
      </div>
    </Layout>
  );
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  post.frontmatter.body = <HTMLContent content={post.body} />
  return <PortfolioPostTemplate
    body={<HTMLContent content={post.html} />}
    title={post.frontmatter.title}
    titleimage={post.frontmatter.titleimage}
    description={post.frontmatter.description}
    category={post.frontmatter.category}
    service={post.frontmatter.service}
    icons ={post.frontmatter.icons}
    gallery={post.frontmatter.gallery}
  />;
}

export const portfolioQuery = graphql`
  query portfolioPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        titleimage{...largeImage}
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
