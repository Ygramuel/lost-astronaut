import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Mitarbeiter from '../../components/Mitarbeiter/Mitarbeiter'
import style from "./team.module.less"

export const TeamPageTemplate = ({ title, beschreibung, contentComponent, mitarbeiter }) => {
  const PageContent = contentComponent || Content;
  return (
    <section>
      <h3>{title}</h3>
      <p>{beschreibung}</p>
      {mitarbeiter.map((arbeiter) =>
        <Mitarbeiter name={arbeiter.name} mail={arbeiter.mail} beschreibung={arbeiter.beschreibung}/>
      )}
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <TeamPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    beschreibung={post.html}
    mitarbeiter={post.frontmatter.mitarbeiter}
  />;
};

export const teamPageQuery = graphql`
  query TeamPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        mitarbeiter {
          beschreibung
          mail
          name
        }
      }
    }
  }
`;
