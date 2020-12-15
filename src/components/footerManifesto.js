import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./footerManifesto.module.css"

const ES = {
  content1: (
    <h3>
      Hablemos sin compromiso, te invito a hacer una primera cita gratuita para
      conocernos.
    </h3>
  ),
  content2: (
    <h3>
      Así decidirás tranquilamente si quieres que empecemos a caminar juntas.
    </h3>
  ),
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

export const query = graphql`
  {
    bottomBackground: file(relativePath: { eq: "bottomManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const FooterManifesto = () => {
  const { bottomBackground } = useStaticQuery(query)

  return (
    <div data-sal="fade" data-sal-delay="300" data-sal-duration="2000">
      <BackgroundImage
        Tag={`div`}
        fluid={bottomBackground.childImageSharp.fluid}
        className={classes.footer}
        backgroundColor={`#FFAE07`}
      >
        <div>
          {languageHandler("content1")}

          {languageHandler("content2")}

          <h3>
            <span className={classes.block}>t: 930 384 721</span>
            <span className={classes.block}>m: 665 335 599</span>
          </h3>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default FooterManifesto
