import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query{
                avatarImage: file(relativePath: { eq: "perfil_foto.png" }){
                    childImageSharp {
                        fixed(width: 60, height: 60) { 
                            ...GatsbyImageSharpFixed_noBase64
                        }
                    }
                }
            }   
        `
        /* se for fluid:
        query{
                avatarImage: file(relativePath: { eq: "perfil_foto.png" }){
                    childImageSharp {
                        fluid(maxWidth: 60, maxHeight: 60) { 
                            ...GatsbyImageSharpFluid_noBase64
                        }
                    }
                }
            }   
             */
    )

    return (
        <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed}/> 
        // se for fluid: <Img fluid={avatarImage.childImageSharp.fluid style={{widith: "60px"}}} />
    )
}

export default Avatar;