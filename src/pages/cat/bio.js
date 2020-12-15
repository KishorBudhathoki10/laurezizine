import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Header from "../../components/headerBio"
import classes from "../../css/bio.module.css"

const bio = () => {
  return (
    <Layout>
      <Header />

      <main className={classes.bioContent}>
        <p
          className={classes.info}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="2000"
        >
          <span className={classes.orange}>SÓC MARE</span> DE DOS NENS
          MERAVELLOSOS,
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Chloé, que es la gran, i el petit, Tom. L'experiència està sent molt
          enriquidora, i ha nascut en mi el desig d'aprofundir en la dinàmica
          que es produeix en el vincle entre la mare i el fill.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Així que he tornat a un recorregut que va començar a París durant set
          anys de psicoanàlisi lacaniana, i que he continuat amb una formació a
          l’Espacio Psicoanalítico de Barcelona durant cinc anys més.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          A més vaig realitzar un curs de puericultura, i vaig treballar amb
          nens petits a la llars d’infant Linus durant tres anys.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Gràcies a aquestes dues facetes del meu recorregut he decidit crear un
          espai terapèutic per a dialogar, càlid i de confiança destinat a les
          problemàtiques que troben les mares de nens petits.
        </p>

        <Link to="/cat/contact" className={classes.link}>
          CONTACTE
        </Link>
      </main>
    </Layout>
  )
}

export default bio
