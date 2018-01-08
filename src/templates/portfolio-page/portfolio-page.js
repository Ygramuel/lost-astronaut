import React from 'react'

import PortBox from '../../components/PortBox/PortBox'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import Content, { HTMLContent } from '../../components/Content';

import style from "./portfolio-page.module.less"

export const PortfoliioPageTemplate = ({ title, image, text, portfolios}) => {
  return (
    <div>
      <DefaultPage title={title} text={text} image={image}/>
        <div className={style.gallery}>
        {portfolios.map(({ node: work }) =>
          <PortBox  key={work.frontmatter.path}
                    title={work.frontmatter.title}
                    path={work.frontmatter.path}
                    image={work.frontmatter.image}
                    icon={work.frontmatter.icons[0].icon}/>
        )}
      </div>
    </div>
  );
}

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

export const portfolioPageQuery = graphql`
  query PortfolioPageQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }
    allMarkdownRemark (
      limit: 5
      filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
    ){
      edges {
        node {
          frontmatter {
            title
            image
            path
            icons{
              icon
            }
          }
        }
      }
    }
  }
`;
