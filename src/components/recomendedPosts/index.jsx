import React from "react";
import propTypes from "prop-types";
import * as S from "./styled";

const RecomendedPosts = ({ next, previous }) => {
  return (
    <S.RecomendedWrapper>
      {previous && (
        <S.RecomendedLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </S.RecomendedLink>
      )}
      {next && (
        <S.RecomendedLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </S.RecomendedLink>
      )}
    </S.RecomendedWrapper>
  )
}

  RecomendedPosts.propTypes = {
    next: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
    previous: propTypes.shape({
      frontmatter: propTypes.shape({
        title: propTypes.string.isRequired,
      }),
      fields: propTypes.shape({
        slug: propTypes.string.isRequired,
      }),
    }),
  }

export default RecomendedPosts;
