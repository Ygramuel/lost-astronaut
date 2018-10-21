import React from 'react';

import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../../components/Content';
import Mitarbeiter from '../../components/Mitarbeiter/Mitarbeiter'
import style from "./team.module.less"
import DefaultPage from '../../components/DefaultPage/DefaultPage'

import Layout from '../../layouts/'
import largeImage from '../../components/IMGFragment'


export default ( {data: {markdownRemark: data } }) => {
  const { title, mitarbeiter, titleimage } = data.frontmatter
  const text = (<HTMLContent content={data.html} />);
  return (
    <Layout>
      <DefaultPage title={title} text={text} image={titleimage} />
    <div className={style.gallery}>
      {mitarbeiter.map((arbeiter) =>
        <Mitarbeiter key={arbeiter.name} name={arbeiter.name} mail={arbeiter.mail} text={arbeiter.text} bild={arbeiter.bild}/>
      )}
    </div>
    </Layout>
  )
}
/*
export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <TeamPageTemplate
    title={post.frontmatter.title}
    text={<HTMLContent content={post.html} />}
    image={post.frontmatter.image}
    mitarbeiter={post.frontmatter.mitarbeiter}
  />;
};*/

export const teamPageQuery = graphql`
  query TeamPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        titleimage {...largeImage}
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
