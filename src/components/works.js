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

const ES = {
  article1: (
    <>
      <h2>
        Terapia <span>Analítica</span>
      </h2>

      <p>
        La Terapia Analítica se articula mediante el diálogo. Es un trabajo
        terapeutico que mejorará tu vida interior y tus vínculos con el mundo.
      </p>
    </>
  ),
  article2: (
    <>
      <h2>
        Acompañamiento <span>en la Maternidad</span>
      </h2>

      <p>
        Para acompañarte durante tu maternidad voy a escucharte, aconsejarte, e
        informarte.
      </p>
      <p>
        Al establecer vínculos entre tu conducta materna y los recuerdos de tu
        propia infancia, construirás la madre que quieres ser.
      </p>
    </>
  ),
}

const CAT = {
  article1: (
    <>
      <h2>
        La Teràpia <span>Analítica</span>
      </h2>

      <p>
        La Teràpia Analítica s'articula mitjançant el diàleg. És un exercici
        terapèutic que millorarà la teva vida interior i els teus vincles amb el
        món.
      </p>
    </>
  ),
  article2: (
    <>
      <h2>
        Orientar <span>la Maternitat</span>
      </h2>

      <p>
        Per a orientar la teva maternitat t'escoltaré, t’aconsellaré, i
        t’informaré. Valorarem juntes les teves competències com a mare.
      </p>
      <p>
        Això et permetrà desenvolupar una millor qualitat de la funció materna.
      </p>
    </>
  ),
}

const FR = {
  article1: (
    <>
      <h2>
        La Thérapie <span>Analytique</span>
      </h2>

      <p>
        C’est une thérapie dite de la parole. Cette thérapie permet de faire un
        travail d’introspection, de développer ses pensées, d’associer librement
        et de se remettre en question lors d’un échange en « face à face », avec
        le thérapeute.
      </p>
    </>
  ),
  article2: (
    <>
      <h2>
        L’orientation <span>à la maternité</span>
      </h2>

      <p>
        Écoute, conseil, information, mise en valeur des compétences de la mère
        qui permet de développer une meilleure qualité de la fonction maternelle
        et d’amener la personne à faire des liens entre ses conduites parentales
        et sa propre enfance.
      </p>
    </>
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

const Works = () => {
  const { image1, image2 } = useStaticQuery(query)

  return (
    <section
      className={classes.worksContainer}
      data-sal="fade"
      data-sal-delay="100"
    >
      <div className={classes.works}>
        <article>
          <div>
            <Image fluid={image1.childImageSharp.fluid} alt="terapiaNew" />
          </div>

          {languageHandler("article1")}
        </article>

        <article>
          <div>
            <Image fluid={image2.childImageSharp.fluid} alt="terapiaNew" />
          </div>

          {languageHandler("article2")}
        </article>
      </div>
    </section>
  )
}

export default Works
