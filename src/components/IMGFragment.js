import { graphql } from 'gatsby'

export const largeImage = graphql`
fragment largeImage on File {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
}
`;
