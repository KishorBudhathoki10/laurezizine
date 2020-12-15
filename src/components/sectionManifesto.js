import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./sectionManifesto.module.css"

export const query = graphql`
  {
    momChild: file(relativePath: { eq: "mumkidManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    family: file(relativePath: { eq: "familyManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    littleGirl: file(relativePath: { eq: "littlegirlManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const SectionManifesto = ({ article, children }) => {
  const { momChild, family, littleGirl } = useStaticQuery(query)

  let image = momChild
  let imageText = "Mom Child Image"

  if (article === "article2") {
    image = family
    imageText = "Family Image"
  } else if (article === "article3") {
    image = littleGirl
    imageText = "Little Girl Image"
  }

  return (
    <section className={classes.section}>
      <div
        className={classes.image}
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="2000"
      >
        <Image fluid={image.childImageSharp.fluid} alt={imageText} />
      </div>

      {children}
    </section>
  )
}

export default SectionManifesto
