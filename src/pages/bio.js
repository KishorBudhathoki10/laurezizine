import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/headerBio"
import classes from "../css/bio.module.css"
import SEO from "../components/SEO"

const bio = () => {
  return (
    <Layout>
      <SEO title="Bio | es" description="Method page" />

      <Header />

      <main className={classes.bioContent}>
        <p
          className={classes.info}
          data-sal="fade"
          data-sal-delay="-20"
          data-sal-duration="1000"
        >
          SOY MADRE de dos niños increibles, Chloé es la mayor, y el pequeño,
          Tom. La experiencia está siendo transformadora. Ha nacido en mí el
          deseo de profundizar en el estrecho vinculo que se produce entre madre
          e hijo.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Así que he vuelto a un recorrido que empezó en París durante siete
          años de psicoanálisis lacaniano. He decidido continuar a profundizar
          el aprendizaje de la teoría de la psicoanálisis gracias a una
          formación (Curso de introducción al psicoanálisis I y II, Seminarios
          de Aperturas, Practicas, Grupo terapéutico) en el Espacio
          Psicoanalítico de Barcelona durante cinco años más.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Para cumplir mis intereses en funciones mas practicas he realizado un
          curso de Puericultura que me ha permitido conocer muy de cerca la
          relación de los pequeños entre si y también su relación con los
          adultos. He trabajado durante 3 años con niños pequeños en la
          guardería Linus.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Mediante estas dos facetas de mi recorrido he creado un espacio
          terapéutico. Para dialogar, con calidez y en confianza destinado a
          resolver las problemáticas con las que se deben enfrentar las mujeres
          que son madres.
        </p>

        <Link to="/contact" className={classes.link}>
          CONTACTO
        </Link>
      </main>
    </Layout>
  )
}

export default bio
