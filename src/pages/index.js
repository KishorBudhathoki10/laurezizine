import React from "react"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import classes from "./index.module.css"
import Hero from "../components/hero"
import Segment from "../components/segment"
import Link from "../components/link"
import Works from "../components/works"

export default function Home({ data }) {
  const { file } = data

  return (
    <Layout>
      <Hero />

      <Segment>
        <h3>El vínculo de la maternidad</h3>
        <p>
          Que valores tiene la relación con los tuyos? Juntos vais a crear
          vuestra propia historia, llena de experiencias maravillosas.
        </p>
      </Segment>

      <Link url="/manifesto" text="Manifesto" />

      <Works />

      <Link url="/metodo" text="Saber mas" />

      <Segment>
        <p>
          “Soy Laure, terapeuta analítica. Hace diez años inicié el proyecto de
          ayudar a las mujeres a construirse como madres.”
        </p>
      </Segment>

      <Link url="/bio" text="Mas sobre mi" />

      <BackgroundImage
        Tag={`div`}
        fluid={file.childImageSharp.fluid}
        className={classes.footer}
        backgroundColor={`#FFAE07`}
      >
        <h3>
          Si tienes ganas de saber
          <span>más no dudes</span>
          <span>en llamarme!</span>
          <span className={classes.block}>t: 930 384 721</span>
          <span className={classes.block}>m: 665 335 599</span>
        </h3>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
