import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './card.module.scss';
import Img from 'gatsby-image';

const Card = (props) => {
    const data = useStaticQuery(graphql`
    query {
        mushrooms: file(relativePath: {eq: "mushrooms.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          molds: file(relativePath: {eq: "mold.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          yeasts: file(relativePath: {eq: "yeast.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }`)
    function renderImage(type) {

        return <Img fluid={data.molds.childImageSharp.fluid}/>


    }
    return (
    <div className={styles.indexCard}>
        <Link to={`/${props.name.toLowerCase()}`}>
            {renderImage(props.name)}
            <h2>{props.name}</h2>
        </Link>
    </div>)
}

export default Card;