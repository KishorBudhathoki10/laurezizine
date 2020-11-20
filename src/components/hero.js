import React from "react"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./hero.module.css"

const query = graphql`
  {
    image1: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image2: file(relativePath: { eq: "laure.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)

  const { image1, image2 } = data

  return (
    <BackgroundImage
      Tag={`div`}
      fluid={image1.childImageSharp.fluid}
      className={classes.header}
      backgroundColor={`#FFAE07`}
    >
      <div className={classes.info}>
        <div className={classes.info__block}>
          <p>
            <span>Hola!</span>
            <span>Sóy Laure</span>
          </p>
        </div>

        <div className={classes.info__block}>
          <p>
            <span>Bienvenida</span>
            <span>a tu terapia</span>
            <span>analítica</span>
          </p>
        </div>

        <div className={classes.lastinfo}>
          <h5>Laure Zizine</h5>

          <p>
            <span>Terapeuta</span>
            <span>Analitica</span>
          </p>
        </div>
      </div>

      <div className={classes.laureImg}>
        <div className={classes.con}></div>
        <div className={classes.image}>
          <Image fluid={image2.childImageSharp.fluid} alt="Laure's Image" />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
