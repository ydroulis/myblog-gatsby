import styled from "styled-components";
import media from "styled-media-query";

export const SocialLinksWrapper = styled.nav`
    margin: 2rem auto;
    width: 100%;

    ${media.lessThan("large")`
    margin: 0.5rem 0 0 0;
    width: auto;
    `}
`

export const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex-wrap: wrap;
`

export const SocialLinksItem = styled.li`
${media.lessThan("large")`
margin-left: 0.5rem;
`}
`

export const SocialLinksLink = styled.a`
    color: var(--texts);
    text-decoration: none;
    transition: color .5s;

    &:hover{
        color: var(--highlight);
    }
`
export const IconWrapper = styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
`