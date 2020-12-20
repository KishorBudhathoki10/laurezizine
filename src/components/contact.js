import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import classes from "./contact.module.css"

const ES = {
  content: (
    <div>
      <p className={classes.changing}>
        Si tienes ganas de saber más no dudes
        <span> en contactarme! </span>
      </p>
      <p>Mob: 665 335 599</p>
      <p>Email: info@laurezizine.com</p>
    </div>
  ),
}

const CAT = {
  content: (
    <div>
      <p className={classes.changing}>
        Si tens ganes de saber-ne més, no dubtis
        <span> en contactar-me! </span>
      </p>
      <p>Mob: 665 335 599</p>
      <p>Email: info@laurezizine.com</p>
    </div>
  ),
}

const FR = {
  content: (
    <div>
      <p className={classes.changing}>
        Si vous voulez en savoir plus, n'hésitez pas à<span> m'appeler </span>
      </p>
      <p>Mob: 665 335 599</p>
      <p>Email: info@laurezizine.com</p>
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
    backgrdImg: file(relativePath: { eq: "home-bottom.png" }) {
      childImageSharp {
        fixed(width: 2500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const HeaderContact = () => {
  const { backgrdImg } = useStaticQuery(query)

  return (
    <div data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
      <BackgroundImage
        Tag={`div`}
        fluid={backgrdImg.childImageSharp.fixed}
        className={classes.header}
      >
        <div className={classes.header_content}>
          {languageHandler("content")}
        </div>
      </BackgroundImage>
    </div>
  )
}

export default HeaderContact
