import React, { useState, useEffect } from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb } from "@styled-icons/octicons/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import * as S from "./styled"
import { ThList as List } from "@styled-icons/typicons/ThList"
import getThemeColor from '../../utils/getThemeColor'

const Menubar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenubarWrapper>
      <S.MenubarGroup>
        <S.MenubarLink
          paintDrip
          direction="left"
          hex={getThemeColor()}
          duration={1}
          to="/"
          title="Voltar para Home"
        >
          <S.MenubarItem>
            <Home />
          </S.MenubarItem>
        </S.MenubarLink>
        <S.MenubarLink
          paintDrip
          direction="left"
          hex={getThemeColor()}
          duration={1}
          to="/search"
          title="Pesquisar"
        >
          <S.MenubarItem>
            <Search />
          </S.MenubarItem>
        </S.MenubarLink>
      </S.MenubarGroup>
      <S.MenubarGroup>
        <S.MenubarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <LightBulb />
        </S.MenubarItem>
        <S.MenubarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenubarItem>
        <S.MenubarItem title="Ir para o topo">
          <Arrow />
        </S.MenubarItem>
      </S.MenubarGroup>
    </S.MenubarWrapper>
  )
}

export default Menubar
