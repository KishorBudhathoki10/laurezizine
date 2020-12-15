import React from "react"

import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Segment from "../../components/segment"
import Link from "../../components/link"
import Works from "../../components/works"
import Contact from "../../components/contact"

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Segment>
        <h3 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Le lien de la maternité
        </h3>
        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Quelles valeurs la relation a-t-elle avec la vôtre? Ensemble, vous
          créerez votre propre histoire, pleine d'expériences merveilleuses.
        </p>
      </Segment>

      <Link url="/fr/manifeste" text="MANIFESTE" />

      <Works />

      <Link url="/fr/methode" text="SAVOIR PLUS" />

      <Segment>
        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          “Je suis Laure, thérapeute analytique. Il y a dix ans, j'ai lancé le
          projet pour aider les femmes à devenir mères.”
        </p>
      </Segment>

      <Link url="/fr/bio" text="PLUS À PROPOS DE MOI" />

      <Contact />
    </Layout>
  )
}
