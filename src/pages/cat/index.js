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

      <Contact />
    </Layout>
  )
}
