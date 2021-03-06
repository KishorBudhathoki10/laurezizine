import React from "react"
// import Image from "gatsby-image"
// import BackgroundImage from "gatsby-background-image"
// import { useStaticQuery, graphql } from "gatsby"
import backgroundImage from "../images/backgroundMain.png"
import profileImage from "../images/laure.png"

import classes from "./hero.module.css"
// import backgroundImage from "../images/backgroundMain.png"

// backgrdImg: file(relativePath: { eq: "backgroundMain.png" }) {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

// const query = graphql`
//   {
//     profileImage: file(relativePath: { eq: "laure.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }

//     backgrdImg: file(relativePath: { eq: "backgroundMain.png" }) {
//       childImageSharp {
//         fixed(width: 4500) {
//           ...GatsbyImageSharpFixed_withWebp
//         }
//       }
//     }
//   }
// `

const ES = {
  greeting1: (
    <p>
      <span>¡Hola!</span>
      <span>Soy Laure</span>
    </p>
  ),
  greeting2: (
    <p>
      <span>Bienvenida</span>
      <span>a tu terapia</span>
      <span>analítica</span>
    </p>
  ),
  profession: <p>Terapeuta Analitica</p>,
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
  profession: <p>Terapeuta Analítica</p>,
}

const FR = {
  greeting1: (
    <p>
      <span>Bonjour!</span>
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
  profession: <p>Thérapeute Analytique</p>,
}

const languageHandler = key => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  if (url === "/cat") {
    return CAT[key]
  } else if (url === "/fr") {
    return FR[key]
  } else {
    return ES[key]
  }
}

const Hero = () => {
  // const data = useStaticQuery(query)

  // const { backgrdImg, profileImage } = data

  return (
    // <BackgroundImage
    //   Tag={`div`}
    //   fluid={backgrdImg.childImageSharp.fixed}
    //   className={classes.header}
    // >
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
            {/* <Image
              fluid={profileImage.childImageSharp.fluid}
              alt="Laure's Image"
            /> */}
            <img src={profileImage} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
