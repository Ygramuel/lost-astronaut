import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import Mitarbeiter from '../../components/Mitarbeiter/Mitarbeiter'
import style from "./team.module.less"
import DefaultPage from '../../components/DefaultPage/DefaultPage'

export const TeamPageTemplate = ({ title, text, mitarbeiter, image, path }) => {
  return (
    <section>
      <DefaultPage title={title} text={text} image={image} path={path} />
    <div className={style.gallery}>
      {mitarbeiter.map((arbeiter) =>
        <Mitarbeiter key={arbeiter.name} name={arbeiter.name} mail={arbeiter.mail} text={arbeiter.text} bild={arbeiter.bild}/>
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
    path={post.frontmatter.path}
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
