import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import Menubar from "../Menubar/index"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level='top'>
        <Sidebar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level='top'>
        <Menubar />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
