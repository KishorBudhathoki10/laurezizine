import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Header from "../../components/headerBio"
import classes from "../../css/bio.module.css"
import SEO from "../../components/SEO"

const bio = () => {
  return (
    <Layout>
      <SEO title="Bio | cat" description="Method page" />
      <Header />

      <main className={classes.bioContent}>
        <p
          className={classes.info}
          data-sal="fade"
          data-sal-delay="-20"
          data-sal-duration="1000"
        >
          <span>SÓC MARE</span> de dos nens meravellosos, Chloé és la major, i
          el petit, Tom. L'experiència està sent molt transformadora. Ha nascut
          en mi el desig d'aprofundir en l'estret vincle que es produeix entre
          mare i fill.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Així que he tornat a un recorregut que va començar a París durant set
          anys de psicoanàlisi Lacaniana. He decidit continuar profunditzant
          l'aprenentatge de la teoria de la psicoanàlisi gràcies a una formació
          (Curs d'introducció a la psicoanàlisi I i II, Seminaris d'Apertures,
          Practiques, Grup terapèutic) en l'Espai Psicoanalític de Barcelona
          durant cinc anys més.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Per a complir els meus interessos en funcions mes practiques he
          realitzat un curs de Puericultura que m'ha permès conèixer molt de
          prop la relació dels petits entre si i també la seva relació amb els
          adults. He treballat durant 3 anys amb nens petits en la guarderia
          Linus.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Gràcies a aquestes dues facetes del meu recorregut he decidit crear un
          espai terapèutic per a dialogar, càlid i de confiança destinat a
          resoldre les problemàtiques amb les quals s'han d'enfrontar les dones
          que són mares.
        </p>

        <Link to="/cat/contact" className={classes.link}>
          CONTACTE
        </Link>
      </main>
    </Layout>
  )
}

export default bio
