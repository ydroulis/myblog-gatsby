import React from "react";

import {Home} from "@styled-icons/boxicons-solid/Home";
import {SearchAlt2 as Search} from "@styled-icons/boxicons-regular/SearchAlt2";
import {UpArrowAlt as Arrow} from "@styled-icons/boxicons-regular/UpArrowAlt";
import {LightBulb} from "@styled-icons/octicons/LightBulb";
import {Grid} from "@styled-icons/boxicons-solid/Grid";
import * as S from "./styled";

const Menubar = () => (
  <S.MenubarWrapper>
    <S.MenubarGroup>
      <S.MenubarLink to="/" title="Voltar para Home">
        <S.MenubarItem><Home/></S.MenubarItem>
      </S.MenubarLink>
      <S.MenubarLink to="/search" title="Pesquisar">
        <S.MenubarItem><Search/></S.MenubarItem>
      </S.MenubarLink>
    </S.MenubarGroup>
    <S.MenubarGroup>
      <S.MenubarItem title="Mudar o tema"><LightBulb/></S.MenubarItem>
      <S.MenubarItem title="Mudar visualização"><Grid/></S.MenubarItem>
      <S.MenubarItem title="Ir para o topo"><Arrow/></S.MenubarItem>
    </S.MenubarGroup>
  </S.MenubarWrapper>
)

export default Menubar
