import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  background: #192734;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  justify-content: center;
  background: #192734;
  color: #1fa1f2;
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
    background: #38444d;
  }

  &.previous {
    border-right: 1px solid #38444d;
  }

  &.next {
    justify-content: flex-end;
  }

`