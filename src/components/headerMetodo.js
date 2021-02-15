import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./headerMetodo.module.css"
// import backgroundImage from "../images/backgroundMetodo.png"

const ES = {
  header: <h2>Metodología</h2>,
  content1: (
    <div>
      <p>
        Uno es actor de su vida. Yo te ayudaré a darte los medios para construir
        tu lugar en la familia.
      </p>
    </div>
  ),
}

const CAT = {
  header: <h2>Metodología</h2>,
  content1: (
    <div>
      <p>
        Un és actor de la seva pròpia vida. Jo t'ajudaré a donar-te els mitjans
        per trobar-te i construir el teu lloc en la família.
      </p>
    </div>
  ),
}

const FR = {
  header: <h2>Méthodologie</h2>,
  content1: (
    <div>
      <p>
        Vous êtes acteur de votre vie. Je vous aiderai à vous donner les moyens
        de vous trouver et de construire votre place dans la dynamique
        familiale.
      </p>
    </div>
  ),
}

const languageHandler = key => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  if (url.includes("/cat")) {
    return CAT[key]
  } else if (url.includes("/fr")) {
    return FR[key]
  } else {
    return ES[key]
  }
}

const query = graphql`
  {
    backgrdImg: file(relativePath: { eq: "backgroundMetodo.png" }) {
      childImageSharp {
        fixed(width: 5000) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const HeaderMetodo = () => {
  const { backgrdImg } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag={`div`}
      fluid={backgrdImg.childImageSharp.fixed}
      className={classes.header}
    >
      {/* <div
      className={classes.header}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    > */}
      <div className={classes.header_wrapper}>
        {languageHandler("header")}

        <div className={classes.header_content}>
          {languageHandler("content1")}
        </div>
      </div>
      {/* </div> */}
    </BackgroundImage>
  )
}

export default HeaderMetodo
