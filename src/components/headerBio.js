import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import classes from "./headerBio.module.css"
// import backgroundImage from "../images/backgroundBio.png"
// import profileImage from "../images/bioProfile.png"
// import profileImageMobile from "../images/bioProfileResponsive.png"

const ES = {
  header: <h5>Terapeuta Analítica</h5>,
  content1: (
    <div>
      <p>
        Hace diez años inicié el proyecto de ayudar a las mujeres a construirse
        como madres.
      </p>
    </div>
  ),
}

const CAT = {
  header: <h5>Terapeuta Analítica</h5>,
  content1: (
    <div>
      <p>
        Fa deu anys vaig iniciar el projecte d'ajudar les dones a construir-se
        com a mares.
      </p>
    </div>
  ),
}

const FR = {
  header: <h5>Thérapeute analytique</h5>,
  content1: (
    <div>
      <p>
        Il y a dix ans, j’ai lancé le projet d’aider les femmes à se construire
        en tant que mères.
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
    backgrdImg: file(relativePath: { eq: "backgroundBio.png" }) {
      childImageSharp {
        fixed(width: 5000) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    profileImg: file(relativePath: { eq: "bioProfile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    profileImgResponsive: file(
      relativePath: { eq: "bioProfileResponsive.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HeaderBio = () => {
  const { backgrdImg, profileImg, profileImgResponsive } = useStaticQuery(query)

  return (
    <div className={classes.HeaderBio}>
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
          <h2>
            Laure <span>Zizine</span>
          </h2>

          {languageHandler("header")}

          <div className={classes.header_content}>
            {languageHandler("content1")}
          </div>
        </div>
        {/* </div> */}
      </BackgroundImage>

      <div className={classes.profileImgResponsive}>
        <Image
          fluid={profileImgResponsive.childImageSharp.fluid}
          alt="Laure Profile Image"
        />
        {/* <img src={profileImageMobile} alt="profile" /> */}
      </div>

      <div className={classes.profileImg}>
        <Image
          fluid={profileImg.childImageSharp.fluid}
          alt="Laure Profile Image"
        />
        {/* <img src={profileImage} alt="profile" /> */}
      </div>
    </div>
  )
}

export default HeaderBio
