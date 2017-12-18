import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Mitarbeiter from '../../components/Mitarbeiter/Mitarbeiter'
import style from "./team.module.less"

export const TeamPageTemplate = ({ title, beschreibung, mitarbeiter, image, contentComponent }) => {
 const PostContent = contentComponent || Content;
  return (
    <section>
      <h3>{title}</h3>
      <img src={image} />
      <PostContent content={beschreibung} />
      {mitarbeiter.map((arbeiter) =>
        <Mitarbeiter name={arbeiter.name} mail={arbeiter.mail} beschreibung={arbeiter.beschreibung} bild={arbeiter.bild}/>
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
    image={post.frontmatter.image}
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
        image
        mitarbeiter {
          beschreibung
          mail
          name
          bild
        }
      }
    }
  }
`;
