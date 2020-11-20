import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import classes from "./works.module.css"

const query = graphql`
  {
    image1: file(relativePath: { eq: "terapiaNew.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    image2: file(relativePath: { eq: "acompanamiento.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Works = () => {
  const { image1, image2 } = useStaticQuery(query)

  return (
    <section className={classes.worksContainer}>
      <div className={classes.works}>
        <article>
          <div>
            <Image fluid={image1.childImageSharp.fluid} alt="terapiaNew" />
          </div>

          <h2>
            Terapia <span>Analítica</span>
          </h2>

          <p>
            La Terapia Analítica se articula mediante el diálogo. Es un trabajo
            terapeutico que mejorará tu vida interior y tus vínculos con el
            mundo.
          </p>
        </article>

        <article>
          <div>
            <Image fluid={image2.childImageSharp.fluid} alt="terapiaNew" />
          </div>

          <h2>
            Acompañamiento
            <span>en la Maternidad</span>
          </h2>

          <p>
            Para acompañarte durante tu maternidad voy a escucharte,
            aconsejarte, e informarte.
          </p>
          <p>
            Al establecer vínculos entre tu conducta materna y los recuerdos de
            tu propia infancia, construirás la madre que quieres ser.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Works
