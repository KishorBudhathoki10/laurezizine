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
        <p className={classes.info} data-sal="fade" data-sal-delay="100">
          <span className={classes.orange}>JE SUIS LA MÈRE</span>
        </p>

        <p data-sal="fade" data-sal-delay="150">
          Chloé est l’aînée et Tom, le plus jeune. L’expérience est très
          enrichissante et est né en moi le désir d’approfondir la dynamique
          dans le lien entre la mère et l’enfant.
        </p>

        <p data-sal="fade" data-sal-delay="150">
          Je suis donc revenue à un parcours psychanalytique commencé à Paris
          durant sept ans de psychanalyse lacanienne, et que j’ai poursuivi avec
          une formation à l’Espacio Psicoanalitico de Barcelona pendant encore
          cinq ans.
        </p>

        <p data-sal="fade" data-sal-delay="150">
          Pour y parvenir, j’ai suivi un cours de puériculture, et j’ai
          travaillé avec de jeunes enfants à la garderie Linus pendant trois
          ans.
        </p>

        <p data-sal="fade" data-sal-delay="150">
          Grâce à ces deux facettes de mon parcours, j’ai décidé de créer un
          espace thérapeutique de dialogue, chaleureux et de confiance destiné
          aux problématiques que rencontrent les mères de jeunes enfants.
        </p>

        <Link to="/fr/contact" className={classes.link}>
          CONTACT
        </Link>
      </main>
    </Layout>
  )
}

export default bio
