import styled from "styled-components";
import { Link } from "gatsby";

export const MenubarWrapper = styled.aside`
    align-items: center;
    background-color: var(--mediumBackground);
    border-left: 1px solid var(--borders);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    right: 0;
    width: 3.75rem;
`

export const MenubarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenubarLink = styled(Link)`
    display: block;
`

export const MenubarItem = styled.span`
    color: var(--texts);
    cursor: pointer;
    display: block;
    height: 3.75rem;
    padding: 1.1rem;
    position: relative;
    width: 3.75rem;

    &.light {
        color: #d4d400;

        &:hover {
            color: #e2e240;
        }
    }

    &:hover{
        color: var(--highlight);
    }
`
