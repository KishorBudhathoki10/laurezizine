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

const ES = {
  greeting1: (
    <p>
      <span>Hola!</span>
      <span>Sóy Laure</span>
    </p>
  ),
  greeting2: (
    <p>
      <span>Bienvenida</span>
      <span>a tu terapia</span>
      <span>analítica</span>
    </p>
  ),
  profession: (
    <p>
      <span>Terapeuta</span>
      <span>Analitica</span>
    </p>
  ),
}

const CAT = {
  greeting1: (
    <p>
      <span>Hola!</span>
      <span>Sóc la Laure</span>
    </p>
  ),
  greeting2: (
    <p>
      <span>Benvinguda a</span>
      <span>la teva teràpia</span>
      <span>analítica</span>
    </p>
  ),
  profession: (
    <p>
      <span>Terapeuta</span>
      <span>Analítica</span>
    </p>
  ),
}

const FR = {
  greeting1: (
    <p>
      <span>Salut!</span>
      <span>Je suis Laure</span>
    </p>
  ),
  greeting2: (
    <p>
      <span>Bienvenue</span>
      <span>à votre thérapie</span>
      <span>analytique</span>
    </p>
  ),
  profession: (
    <p>
      <span>Thérapeute</span>
      <span>Analytique</span>
    </p>
  ),
}

const languageHandler = prop => {
  if (window.location.pathname === "/cat") {
    return CAT[prop]
  } else if (window.location.pathname === "/fr") {
    return FR[prop]
  } else {
    return ES[prop]
  }
}

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
          {languageHandler("greeting1")}
        </div>

        <div className={classes.info__block}>
          {languageHandler("greeting2")}
        </div>

        <div className={classes.lastinfo}>
          <h5>Laure Zizine</h5>

          {languageHandler("profession")}
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
