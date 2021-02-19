import React from "react";
import { graphql } from "gatsby";

<<<<<<< HEAD
import Layout from "../components/Layout";
import SEO from "../components/seo";
import RecomendedPosts from "../components/recomendedPosts";
import Comments from "../components/Comments";
=======
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/recommendedPosts"
>>>>>>> 42699eb45080ceaec5683f065d78f6f6cc7179b9

import * as S from "../components/Post/styled";

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark
    const next = pageContext.nextPost;
<<<<<<< HEAD
    const previous = pageContext. previousPost;
=======
    const previous = pageContext.previousPost;
>>>>>>> 42699eb45080ceaec5683f065d78f6f6cc7179b9

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
<<<<<<< HEAD
            <RecomendedPosts next={next} previous={previous}/>
            <Comments url={post.fields.slug} title={post.frontmatter.title}/>
            
=======
            <RecommendedPosts next={next} previous={previous}></RecommendedPosts>
>>>>>>> 42699eb45080ceaec5683f065d78f6f6cc7179b9
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