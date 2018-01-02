import React from 'react'

import PortBox from '../../components/PortBox/PortBox'
import DefaultPage from '../../components/DefaultPage/DefaultPage'

export const PortfoliioPageTemplate = ({ title, image, text, portfolios}) => {
  return (
    <div>
      <DefaultPage text={text} title={title} image={image} />

        {portfolios.map(({ node: work }) =>
          <PortBox  title={work.frontmatter.title}
                    path={work.frontmatter.path}
                    image={work.frontmatter.image}/>
        )}
    </div>
  );
}

export default class PortfolioPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    // ToDo: make this in graphQL
    // And set limit
    const portfolios = posts.filter(post => post.node.frontmatter.templateKey === 'portfolio-post');

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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            templateKey
            title
            image
            path
          }
        }
      }
    }
  }
`;
