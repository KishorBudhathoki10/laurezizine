import React from "react"
import Image from "gatsby-image"

import classes from "./sectionManifesto.module.css"

const SectionManifesto = ({ image, imageText, children }) => {
  return (
    <section className={classes.section}>
      <div className={classes.image}>
        <Image fluid={image.childImageSharp.fluid} alt={imageText} />
      </div>

      {children}
    </section>
  )
}

export default SectionManifesto
