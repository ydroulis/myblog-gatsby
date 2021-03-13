import React from "react"
import propTypes from "prop-types"
import * as S from "./style"
import getThemeColor from '../../utils/getThemeColor'

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink
        cover
        direction="right"
        bg={getThemeColor().cover}
        duration={1}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
        <br />
        <p>← Anterior</p>
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="left"
        bg={getThemeColor().cover}
        duration={1}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
        <br />
        <p>Próximo →</p>
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
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

export default RecommendedPosts
