import React from "react"
import propTypes from "prop-types"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from '../../utils/getThemeColor'

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <Anilink cover direction="left" bg={getThemeColor()} duration={1} to={prevPage}>
        ← página anterior
      </Anilink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Anilink cover direction="right" bg={getThemeColor()} duration={1} to={nextPage}>
        próxima página →
      </Anilink>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
