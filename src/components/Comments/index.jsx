import React from "react";
import ReactDisqusComments from "react-disqus-comments";
import PropTypes from "prop-types";

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeURL = `https://mydroulisblog.netlify.app/${url}`
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="https-mydroulisblog-netlify-app"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments;