import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Mitarbeiter from '../../components/Mitarbeiter/Mitarbeiter'
import style from "./team.module.less"
import DefaultPage from '../../components/DefaultPage/DefaultPage'

export const TeamPageTemplate = ({ title, text, mitarbeiter, image }) => {
  return (
    <section>
      <DefaultPage title={title} text={text} image={image} />
    <div className={style.gallery}>
      {mitarbeiter.map((arbeiter) =>
        <Mitarbeiter name={arbeiter.name} mail={arbeiter.mail} text={arbeiter.text} bild={arbeiter.bild}/>
      )}
    </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <TeamPageTemplate
    title={post.frontmatter.title}
    text={<HTMLContent content={post.html} />}
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
          text
          mail
          name
          bild
        }
      }
    }
  }
`;
