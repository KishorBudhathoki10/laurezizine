import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import HeaderMetodo from "../../components/headerMetodo"
import Section from "../../components/sectionMetodo"
import classes from "../../css/metodo.module.css"
import SEO from "../../components/SEO"

const methode = () => {
  return (
    <Layout>
      <SEO title="Methode" description="Method page" />
      <HeaderMetodo />

      <Section article="article1">
        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La Thérapie Analytique
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          C’est une thérapie dite de la parole, qui permet de réfléchir,
          d’élaborer, de remettre en question. Il n’y a ni mauvaise, ni bonne
          parole. Il n’y a aucun jugement. C’est un temps, un espace, qui
          n’appartient qu’à soi et qui permet de libérer ses souffrances.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Cette thérapie permet de faire un travail d’introspection, de
          développer ses pensées, d’associer librement et de se remettre en
          question lors d’un échange en « face à face », avec le thérapeute. Le
          fait d’exprimer tout ce que l’on a en tête, sans retenue, permet de
          progresser dans l’exploration de sa psyché et la connaissance de soi.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Nous nous interrogeons sur l’origine de nos problèmes pour en
          comprendre les mécanismes inconscients et ainsi les causes peuvent
          être identifiées, et étant analysées, reconnues, comprises, nous
          pouvons alors changer certains modes de fonctionnements et diminuer
          une angoisse. Cette compréhension à pour but la disparition de ses
          problèmes, ainsi la situation peut être transformée et la vie changée.
        </p>
      </Section>

      <Section article="article2">
        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          L’orientation <span>à la maternité</span>
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Grâce à l’écoute, le conseil, l’information, l’orientation à la
          maternité aide à se reconnaître soi-même dans son rôle de mère et dans
          sa place de parent. C’est une guidance qui permet de développer une
          meilleure qualité de la fonction maternelle en mettant en valeur les
          propres compétences de la mère. Chaque histoire est unique et mérite
          une attention particulière.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          L’orientation à la maternité amène la personne à faire des liens entre
          ses conduites parentales et sa propre enfance. Cela permet de devenir
          la mère que l’on souhaite, et donner à ses enfants les valeurs qu’on a
          choisies, et vivre ainsi sa maternité de manière consciente.
        </p>
      </Section>

      <Link to="/fr/contact" className={classes.link}>
        CONTACT
      </Link>
    </Layout>
  )
}

export default methode
