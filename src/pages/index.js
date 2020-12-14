import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Segment from "../components/segment"
import Link from "../components/link"
import Works from "../components/works"
import Contact from "../components/contact"

export default function Home() {
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

      <Link url="/metodo" text="SABER MÁS" />

      <Segment>
        <p>
          “Soy Laure, terapeuta analítica. Hace diez años inicié el proyecto de
          ayudar a las mujeres a construirse como madres.”
        </p>
      </Segment>

      <Link url="/bio" text="Mas sobre mi" />

      <Contact />
    </Layout>
  )
}
