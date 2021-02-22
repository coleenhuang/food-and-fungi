import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default (props) => {
    const data = useStaticQuery(graphql`
    query IndexImageQuery {
        images: allFile(filter: {relativeDirectory: {eq: "index"}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
              relativePath
              name
            }
          }
        }
      }
    `) 
    const image = data.images.edges.find( n => n.node.name === props.img)
    console.log(image)
    return <Img fluid={image.node.childImageSharp.fluid} />
}