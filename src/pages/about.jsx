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
        Meu nome é Willian Justen de Vasconcellos, nasci em Petrópolis/RJ e sou
        instrutor na Udemy, além de ser um nômade digital e tirar algumas fotos
        por onde vou.
      </p>
      <p>
        Já passei por empresas como Toptal, Huge, Globo.com, Queremos e outras
        mais. Cursei Tecnologia da Informação na Faeterj-Petrópolis no ano de
        2014, mas curiosamente, essa não foi minha primeira faculdade, eu também
        fiz Química Industrial na Uff. Sim, você leu certo, eu realmente fiz
        Química… E por que eu trabalho com web agora? Ah… porque web é incrível,
        a facilidade em aprender cada dia mais e ainda poder ajudar um grande
        número de pessoas me deixa feliz e realizado todos os dias.
      </p>
      <p>
        Eu amo trabalhar em equipe e sou bem comunicativo. No meu tempo livre,
        gosto de ensinar meus amigos sobre alguma coisa que aprendi, acho que
        por isso nasceu esse blog.
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
