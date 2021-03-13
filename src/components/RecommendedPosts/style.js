import styled from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
`

export const RecommendedLink = styled(Anilink)`
  align-items: center;
  justify-content: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  flex-direction: column;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  p {
    dsplay: inline;
  }

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }

`