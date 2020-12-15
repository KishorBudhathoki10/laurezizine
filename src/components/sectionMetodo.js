import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./sectionMetodo.module.css"

export const query = graphql`
  {
    family: file(relativePath: { eq: "familyMetodo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    motherChild: file(relativePath: { eq: "metodoMotherChild.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const SectionMetodo = ({ article, children }) => {
  const { family, motherChild } = useStaticQuery(query)

  let image = family
  let imageText = "Family Image"

  console.log(article)

  if (article === "article2") {
    image = motherChild
    imageText = "Mom Child Image"
  }

  return (
    <section className={classes.section}>
      <div className={classes.image} data-sal="fade" data-sal-delay="100">
        <Image fluid={image.childImageSharp.fluid} alt={imageText} />
      </div>

      {children}
    </section>
  )
}

export default SectionMetodo
