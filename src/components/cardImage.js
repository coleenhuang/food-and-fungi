import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default ({type}) => {
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
    switch(type) {
        case 'mushrooms':
           return <Img fluid={data.mushrooms.childImageSharp.fluid} />
        case 'molds':
            return <Img fluid={data.molds.childImageSharp.fluid} />
        case 'yeasts':
            return <Img fluid={data.yeasts.childImageSharp.fluid} />
        default:
            return <div>Placeholder</div>
    }
}
    

