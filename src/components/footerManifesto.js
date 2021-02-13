import React from "react"
import BackgroundImage from "gatsby-background-image"
// import { graphql, useStaticQuery } from "gatsby"

import backgroundImage from "../images/bottomManifesto.png"
import classes from "./footerManifesto.module.css"

const ES = {
  content1: (
    <h3>
      Hablemos sin compromiso, te invito a hacer una primera cita gratuita para
      conocernos. Así decidirás tranquilamente si quieres que empecemos a
      caminar juntas.
    </h3>
  ),
  // content2: (
  //   <h3>
  //     Así decidirás tranquilamente si quieres que empecemos a caminar juntas.
  //   </h3>
  // ),
}

const CAT = {
  content1: (
    <h3>
      Parlem sense compromís, et convido a establir una primera cita gratuïta
      per conèixer-nos.
    </h3>
  ),
  content2: (
    <h3>Decidiràs tranquil·lament si vols que comencem a caminar juntes.</h3>
  ),
}

const FR = {
  content1: (
    <h3>
      Parlons-en tranquillement, je vous invite à prendre un premier rendez-vous
      gratuit pour nous connaître.
    </h3>
  ),
  content2: (
    <h3>
      Vous déciderez si vous voulez que nous commencions le chemin ensemble.
    </h3>
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

// export const query = graphql`
//   {
//     bottomBackground: file(relativePath: { eq: "bottomManifesto.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `

const FooterManifesto = () => {
  // const { bottomBackground } = useStaticQuery(query)

  return (
    // <BackgroundImage
    //   Tag={`div`}
    //   fluid={bottomBackground.childImageSharp.fluid}
    //   className={classes.footer}
    //   backgroundColor={`#FFAE07`}
    // >
    <div
      className={classes.footer}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: `#FFAE07`,
      }}
    >
      <div>
        {languageHandler("content1")}

        {languageHandler("content2")}

        <div className={classes.special}>
          <h3>
            <span className={classes.block}>M: 665 335 599</span>
            <span className={classes.block}>info@laurezizine.com</span>
          </h3>
        </div>
      </div>
    </div>
    // </BackgroundImage>
  )
}

export default FooterManifesto
