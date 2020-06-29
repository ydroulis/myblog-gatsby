import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      background=""
      category="Misc"
      date="28 de Junho de 2020"
      timeToRead= "5"
      title="Diga não ao Medium: tenha a sua própria plataforma"
      description="Algumas razões para você ter a sua própria plataforma eo invés de soluções como o Medium"
    />
  </Layout>
)

export default IndexPage
