import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import styles from './index.module.scss'

import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.intro}>
      <div>
        <h1>Fungi [ˈfəŋ-​ˌgī]</h1>
        <p>A kingdom of eukaryotic organisms consumed or used in the production of food.</p>
      </div>
    </div>
    <div className={styles.cardContainer}>
        <Card name='Mushroom' img='mushrooms'/>
        <Card name='Molds' img='mold'/>
        <Card name='Yeasts'img='yeast'/>
    </div>
  </Layout>
)

export default IndexPage
