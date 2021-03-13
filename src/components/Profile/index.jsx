import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import getThemeColor from '../../utils/getThemeColor'

import Avatar from "../Avatar/index"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }, //o useStaticQuery retorna titlr, position e description
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `) //o useStaticQuery recebe a query con os dados solicitados

  return (
    // depois temos a renderização do nosso componente com os dados retornados do useStaticQuery
    <S.ProfileWrapper>
      <S.ProfileLink paintDrip direction='left' hex={getThemeColor()} duration={1} to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

/*const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render={({site: {siteMetadata: {title, position, description}}}) => ( 
    // ou render={data => ( 
      <div className="Profile-wrapper">
        <h1>{title}</h1> ou {data.site.siteMetadata.title}
        <h2>{position}</h2> ou {data.site.siteMetadata.position}
        <p>{description}</p> ou {data.site.siteMetadata.description}
      </div>
    )}
  />
)
*/
export default Profile
