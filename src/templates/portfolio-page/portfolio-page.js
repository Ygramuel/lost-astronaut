import React from 'react'
import { graphql } from 'gatsby'
import largeImage from '../../components/IMGFragment'

import {PortBox, portBoxData} from '../../components/PortBox/PortBox'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import Content, { HTMLContent } from '../../components/Content';

import style from "./portfolio-page.module.less"

import Layout from '../../layouts/'

export default({ data }) => {
  const { title, titleimage } = data.markdownRemark.frontmatter
  const text = (<HTMLContent content={data.markdownRemark.html} />)
  const portfolios = data.allMarkdownRemark.edges

  return (
    <Layout>
      <DefaultPage title={title} text={text} image={titleimage}/>
        <div className={style.gallery}>
        {portfolios.map(({ node: work }) =>
          <PortBox  key={work.frontmatter.path}
                    title={work.frontmatter.title}
                    path={work.frontmatter.path}
                    image={work.frontmatter.titleimage}
                    icon={work.frontmatter.icons[0].icon}/>
        )}
      </div>
    </Layout>
  );
}
/*
export default class PortfolioPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: portfolios } = data.allMarkdownRemark;

    const pageData = data.markdownRemark

    return (
      <PortfoliioPageTemplate
        title={pageData.frontmatter.title}
        image={pageData.frontmatter.image}
        text={<HTMLContent content={pageData.html} />}
        portfolios = {portfolios}
        />
    );
  }
}
*/
export const portfolioPageQuery = graphql`
  query PortfolioPageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        titleimage {...largeImage}
      }
    }
    allMarkdownRemark (
      limit: 5
      sort: {fields: [frontmatter___sort], order: ASC}
      filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
    ){
      edges {
        node {
          ...portBoxData
        }
      }
    }
  }
`;
