import React from 'react';
import PortBox from '../components/PortBox/PortBox';
import Helmet from 'react-helmet';

export const PortfoliioPageTemplate = ({ title, bild, text, portfolios}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{title}</h1>
        {portfolios.map(({ node: work }) =>
          <PortBox  title={work.frontmatter.title}
                    path={work.frontmatter.path}
                    text={work.frontmatter.description}
                    image=""/>
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

export const portfolioQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
