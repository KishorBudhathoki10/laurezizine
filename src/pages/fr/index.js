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
        <h3>Le lien de la maternité</h3>
        <p>
          Quelles valeurs la relation a-t-elle avec la vôtre? Ensemble, vous
          créerez votre propre histoire, pleine d'expériences merveilleuses.
        </p>
      </Segment>

      <Link url="/fr/manifeste" text="MANIFESTE" />

      <Works />

      <Link url="/fr/methode" text="SAVOIR PLUS" />

      <Segment>
        <p>
          “Je suis Laure, thérapeute analytique. Il y a dix ans, j'ai lancé le
          projet pour aider les femmes à devenir mères.”
        </p>
      </Segment>

      <Link url="/fr/bio" text="PLUS À PROPOS DE MOI" />

      <BackgroundImage
        Tag={`div`}
        fluid={file.childImageSharp.fluid}
        className={classes.footer}
        backgroundColor={`#FFAE07`}
      >
        <h3>
          Si vous voulez en savoir
          <span>plus, n'hésitez pas à </span>
          <span>m'appeler </span>
          <span className={classes.block}>t: 930 384 721 </span>
          <span className={classes.block}>m: 665 335 599 </span>
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
