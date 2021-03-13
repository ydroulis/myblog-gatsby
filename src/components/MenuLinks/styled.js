import styled from "styled-components";
import media from "styled-media-query";
import Anilink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
display: flex;

${media.lessThan("large")`
position: absolute;
right: 1rem;
`}
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 300;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;
    
    .active{
        color: var(--highlight);
    }
    ${media.lessThan("large")`
    margin-left: 0.5rem;
    `}
`

export const MenuLinksLink = styled(Anilink)`
    color: var(--texts);
    text-decoration: none;
    transition: color .5s;

    &:hover{
        color: var(--highlight);
    } 
`