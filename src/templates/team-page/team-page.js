import React from 'react';
import Content, { HTMLContent } from '../../components/Content';
import style from "./team.module.less"

export const TeamPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  console.log("und hier die styles");
  console.log(style);
  return (
    <section>
      <style>{style.toString()}</style>
      <div className={style.main}>Ich bin das Team page TEmplate</div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <TeamPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />;
};

export const teamPageQuery = graphql`
  query TeamPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
