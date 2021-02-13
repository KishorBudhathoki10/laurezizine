import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Segment from "../components/segment"
import LinkTwo from "../components/link"
import Works from "../components/works"
import Contact from "../components/contact"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home | es" description="Home page Laure Zizine" />

      <Hero />

      <Segment>
        <Link to="/manifesto">
          <h3 data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            El vínculo de la maternidad
          </h3>
        </Link>
        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Que valores tiene la relación con los tuyos? Juntos vais a crear
          vuestra propia historia, llena de experiencias maravillosas.
        </p>
      </Segment>

      <LinkTwo url="/manifesto" text="Manifesto" />

      <Works />

      <LinkTwo url="/metodo" text="SABER MÁS" />

      <Segment>
        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          “Soy Laure, terapeuta analítica. Hace diez años inicié el proyecto de
          ayudar a las mujeres a construirse como madres.”
        </p>
      </Segment>

      <LinkTwo url="/bio" text="Mas sobre mi" />

      <Contact />
    </Layout>
  )
}
