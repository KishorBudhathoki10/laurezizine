import React from "react"

import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

// import backgroundImage from "../images/backgroundManifesto.png"
import classes from "./headerManifesto.module.css"

const ES = {
  header: (
    <h2>
      El Primer <span>Vínculo</span>
    </h2>
  ),
  content1: (
    <div>
      <p>Quieres tener un hijo.</p>
      <p>¡Estás embarazada! ¡Ya llegó el bebé!</p>
    </div>
  ),
  content2: (
    <div>
      <p>
        Son momentos llenos de felicidad. Pero también son tiempos perturbadores
        que causan cansancio, y a veces angustia e incluso sensación de culpa.
      </p>
    </div>
  ),
}

const CAT = {
  header: (
    <h2>
      El Primer <span>Vincle</span>
    </h2>
  ),
  content1: (
    <div>
      <p>Vols tenir un fill.</p>
      <p>Estàs embarassada! Ja arriba el bebè!</p>
    </div>
  ),
  content2: (
    <div>
      <p>
        Son moments de joia. Però també són temps pertorbadors que causen
        cansament, i a vegades angoixa i fins i tot sensació de culpa.
      </p>
    </div>
  ),
}

const FR = {
  header: (
    <h2>
      Le Premier <span>Lien</span>
    </h2>
  ),
  content1: (
    <div>
      <p>Vous désirez avoir un enfant.</p>
      <p>Vous êtes enceinte! Le bébé est là!</p>
    </div>
  ),
  content2: (
    <div>
      <p>
        Ce sont des moments de bonheur. Mais ce sont aussi des périodes
        bouleversantes qui causent de la fatigue, parfois de l’angoisse et même
        la culpabilité.
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
    backgrdImg: file(relativePath: { eq: "backgroundManifesto.png" }) {
      childImageSharp {
        fixed(width: 2500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const HeaderManifesto = () => {
  const { backgrdImg } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag={`div`}
      fluid={backgrdImg.childImageSharp.fixed}
      className={classes.header}
    >
      {/* <div
      className={classes.header}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    > */}
      <h3 className={classes.onlyMobileHeader}>Manifiesto</h3>

      <div className={classes.header_wrapper}>
        {languageHandler("header")}

        <div className={classes.header_content}>
          {languageHandler("content1")}
          {languageHandler("content2")}
        </div>
      </div>
      {/* </div> */}
    </BackgroundImage>
  )
}

export default HeaderManifesto
