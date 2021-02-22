import React from "react"
import PostItem from "../PostItem"

import * as S from "../ListWrapper/styled"

const Hit = ({ hit }) => {
  return (
    <S.ListWrapper>
      <PostItem
        slug={hit.fields.slug}
        background={hit.background}
        title={hit.title}
        date={hit.date}
        description={hit.description}
        category={hit.category}
      />
    </S.ListWrapper>
  )
}

export default Hit
