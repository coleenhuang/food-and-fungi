import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Fungi [ˈfəŋ-​ˌgī]</h1>
    <p>A kingdom of eukaryotic organisms consumed or used in the production of food.</p>
    <Link to='/mushrooms'>
      <Card name='Mushrooms'/>
    </Link>
    <Link to='/molds'>
      <Card name='Molds'/>
    </Link>
    <Link to='/yeasts'>
      <Card name='Yeasts'/>
    </Link>
  </Layout>
)

export default IndexPage
