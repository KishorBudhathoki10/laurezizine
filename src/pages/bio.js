import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/headerBio"
import classes from "../css/bio.module.css"

const bio = () => {
  return (
    <Layout>
      <Header />

      <main className={classes.bioContent}>
        <p className={classes.info}>
          <span className={classes.orange}>SOY MADRE</span> DE DOS NIÑOS
          INCREIBLES,
        </p>

        <p>
          Chloé es la mayor, y el pequeño, Tom. La experiencia está siendo
          transformadora, y ha nacido en mí el deseo de profundizar en la
          dinámica que se produce en el vínculo entre la madre y el hijo.
        </p>

        <p>
          Así que he vuelto a un recorrido que empezó en París durante siete
          años de psicoanálisis lacaniano, y que he continuado con una formación
          en el Espacio Psicoanalítico de Barcelona durante cinco años más.
        </p>

        <p>
          Además he realizado un curso de Puericultura y he trabajado durante 3
          años con niños pequeños como profesora en la guardería Linus.
        </p>

        <p>
          Mediante estas dos facetas de mi recorrido he creado un espacio
          terapéutico. Para dialogar, con calidez y en confianza, sobre las
          problemáticas que encuentran las mujeres que son madres.
        </p>

        <Link to="/contact" className={classes.link}>
          CONTACTO
        </Link>
      </main>
    </Layout>
  )
}

export default bio
