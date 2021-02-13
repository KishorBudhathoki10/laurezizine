import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Header from "../../components/headerBio"
import classes from "../../css/bio.module.css"
import SEO from "../../components/SEO"

const bio = () => {
  return (
    <Layout>
      <SEO title="Bio | fr" description="Method page" />

      <Header />

      <main className={classes.bioContent}>
        <p
          className={classes.info}
          data-sal="fade"
          data-sal-delay="-20"
          data-sal-duration="1000"
        >
          JE SUIS LA MÉRE de deux enfants merveilleux. Chloé est l’aînée et Tom,
          le plus jeune. L’expérience est très enrichissante et est né en moi le
          désir d’approfondir la dynamique dans le lien entre la mère et
          l’enfant.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Je suis donc revenue à un parcours psychanalytique commencé à Paris
          durant sept ans de psychanalyse lacanienne, et j’ai continué à
          approfondir l’apprentissage de la théorie de la psychanalyse grâce à
          une formation (Cours d’introduction à la psychanalyse I et II,
          Séminaires d’Ouvertures, Pratiques, Groupe thérapeutique) à l’Espace
          Psychanalytique de Barcelone pendant cinq années supplémentaires.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Aussi, j’ai suivi un cours de Puériculture qui m’a permis de connaître
          de très près la relation des petits entre eux et aussi leur relation
          avec les adultes. J’ai travaillé avec de jeunes enfants à la crèche
          Linus pendant trois ans.
        </p>

        <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
          Grâce à ces deux facettes de mon parcours, j’ai décidé de créer un
          espace thérapeutique de dialogue, chaleureux et de confiance destiné
          aux problématiques que rencontrent les mères.
        </p>

        <Link to="/fr/contact" className={classes.link}>
          CONTACT
        </Link>
      </main>
    </Layout>
  )
}

export default bio
