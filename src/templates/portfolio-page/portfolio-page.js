import React from 'react'

import PortBox from '../../components/PortBox/PortBox'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import style from "./portfolio-page.module.less"

export const PortfoliioPageTemplate = ({ title, image, text, portfolios}) => {
  return (
    <div>
      <DefaultPage title={title} />
        <div className={style.gallery}>
        {portfolios.map(({ node: work }) =>
          <PortBox  title={work.frontmatter.title}
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

    return (
      <PortfoliioPageTemplate
        title="Portfolio Seite (Hardcoded)"
        portfolios = {portfolios}
        />
    );
  }
}

export const portfolioPageQuery = graphql`
  query PortfolioPageQuery {
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
