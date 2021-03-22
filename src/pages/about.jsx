import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AboutWrapper } from "../styles/about"

const AboutPage = () => (
  <Layout>
    <SEO 
      title="About" 
      image="../images/eu.png"
    />
    <AboutWrapper>
      <Foto />
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Yuri Lombardi Androulis, nasci em São Paulo/SP e sou Desenvolvedor Frontend. Comecei a entrar no mundo do desenvolvimento pra poder cumprir um objetivo, me casar. Mas acabei me apaixonando demais pela area.
      </p>
      <p>
        Trabalho atualmente como Dev na empresa Badico Cloud onde foi meu primeiro emprego de Desenvolvedor Frontend. Cursei técnico em telecomunicações no Senai onde tive primeiro contato com programação, tenho certificado do Senac para introdução a Java e também sou certificado pela Caelum em html, css, javaScript e React. 
      </p>
      <p>
        Eu amo ver filmes, animes, seriados e ouvir musicas. Gosto muito também de jogar videogame, desenhar, tocar piano, passear ao ar livre e viajar e espero que curtam cada nova experiencia que eu compartilhar com vocês por meio deste blog.
      </p>
      <h1>Contato</h1>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
      <SocialLinks/>
    </AboutWrapper>
  </Layout>
)

const Foto = () => {
  const { fotoImage } = useStaticQuery(
    graphql`
      query {
        fotoImage: file(relativePath: { eq: "eu.png" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
      <Img fluid={fotoImage.childImageSharp.fluid} />
  )
}

export default AboutPage
