import React from "react"
import Image from "gatsby-image"
// import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import classes from "./hero.module.css"
import backgroundImage from "../images/backgroundMain.png"

// backgrdImg: file(relativePath: { eq: "backgroundMain.png" }) {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

const query = graphql`
  {
    profileImage: file(relativePath: { eq: "laure.png" }) {
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
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  if (url === "/cat") {
    return CAT[prop]
  } else if (url === "/fr") {
    return FR[prop]
  } else {
    return ES[prop]
  }
}

const Hero = () => {
  const data = useStaticQuery(query)

  const { profileImage } = data

  return (
    // <BackgroundImage
    //   Tag={`div`}
    //   fluid={backgrdImg.childImageSharp.fluid}
    //   className={classes.header}
    // >
    // </BackgroundImage>

    <div
      className={classes.header}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className={classes.headerContainer}>
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
            <Image
              fluid={profileImage.childImageSharp.fluid}
              alt="Laure's Image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
