import styled from 'styled-components'
import media from 'styled-media-query'

export const AboutWrapper = styled.div`
padding: 2rem 5rem 0;


div:first-child{
    margin: 0 auto;
    max-width: 400px;
    border-radius: 50%;
}

p, h1{
    color: var(--postColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
}

h1{
    font-size: 2.8rem;
    font-weight: 800;
    margin: 2.4rem auto 1rem;
    line-height: 1.4;
}

p{
    margin: 0 auto 1.6rem;
}

ul{
width: 60%;
margin: 0 auto;
}

${media.lessThan("large")`
padding: 0 0.5rem;
margin: 2rem 0; 

div:first-child{
    max-width: 250px;
}

h1{
    font-size: 2.3rem;
}

p{
    font-size: 1rem;
}
`}
`