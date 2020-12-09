import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import classes from "../../css/index.module.css"
import Hero from "../../components/hero"
import Segment from "../../components/segment"
import Link from "../../components/link"
import Works from "../../components/works"

export default function Home({ data }) {
  const { file } = data

  return (
    <Layout>
      <Hero />

      <Segment>
        <h3>El vincle de la maternitat</h3>
        <p>
          Quins valors té la relació amb els teus? Junts creareu la vostra
          pròpia història, plena d'experiències meravelloses.
        </p>
      </Segment>

      <Link url="/cat/manifest" text="MANIFEST" />

      <Works />

      <Link url="/cat/metode" text="SABER-NE MÉS" />

      <Segment>
        <p>
          “Sóc la Laure, terapeuta analítica. Fa deu anys vaig començar el
          projecte d'ajudar a les dones a construir-se com a mares.”
        </p>
      </Segment>

      <Link url="/cat/bio" text="MÉS SOBRE MI" />

      <BackgroundImage
        Tag={`div`}
        fluid={file.childImageSharp.fluid}
        className={classes.footer}
        backgroundColor={`#FFAE07`}
      >
        <h3>
          Si tens ganes de saber-ne
          <span>més, no dubtis </span>
          <span>en trucar-me! </span>
          <span className={classes.block}>t: 930 384 721</span>
          <span className={classes.block}>m: 665 335 599</span>
        </h3>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "home-bottom.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
