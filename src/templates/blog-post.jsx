import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import RecomendedPosts from "../components/recomendedPosts";
import Comments from "../components/Comments";

import * as S from "../components/Post/styled";

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const next = pageContext.nextPost;
    const previous = pageContext. previousPost;

    return(
        <Layout>
          <SEO title={post.frontmatter.title}/>
            <S.PostHeader>
              <S.PostDate>
                {post.frontmatter.date} • {post.timeToRead} min de leitura
              </S.PostDate>
              <S.PostTitle><h1>Title: {post.frontmatter.title}</h1></S.PostTitle>
              <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
              <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </S.MainContent>
            <RecomendedPosts next={next} previous={previous}/>
            <Comments url={post.fields.slug} title={post.frontmatter.title}/>
            
        </Layout>
    )
}

export const query = graphql`
query Post($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
  
`

export default BlogPost;