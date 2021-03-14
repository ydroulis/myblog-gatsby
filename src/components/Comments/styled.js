import styled from "styled-components"
import media from 'styled-media-query'

export const CommentsWrapper = styled.section`
margin: auto;
max-width: 70rem;
padding: 3rem 6.4rem 3rem;

iframe[src*="ads-iframe"] {
    display: none;
}

#disqus_thread {
    a {
        color: var(--highlight) !important;
    }
}

${media.lessThan('large')`
padding: 0 1rem;
margin-top: 1rem;

`}
`

export const CommentsTitle = styled.h2`
color: var(--postColor);
font-size: 2.1rem;
font-weight: 700;
padding-bottom: 2rem;

${media.lessThan('large')`
text-align: center;
`}
`