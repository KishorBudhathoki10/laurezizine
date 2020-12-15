import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import classes from "../../css/manifesto.module.css"
import SectionManifesto from "../../components/sectionManifesto"
import Header from "../../components/headerManifesto"
import FooterManifesto from "../../components/footerManifesto"

const Manifeste = () => {
  return (
    <Layout>
      <div className={classes.Manifesto}>
        <Header />

        <div
          className={classes.article}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="2000"
        >
          <p>
            Les émotions sont exacerbées, le corps se transforme, et on peut se
            sentir dépassé.
          </p>
        </div>

        <div
          className={classes.article}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="2000"
        >
          <p>
            Nous sommes confrontés à des questions intimes et profondes, mais
            aussi pratiques.
          </p>
        </div>

        <SectionManifesto article="article1">
          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            La maternité est l’un des défis les plus importants de la vie d’une
            femme. Celui de commencer une merveilleuse aventure avec notre
            enfant. Celui de porter un nouveau regard sur nous-mêmes. Celui de
            tisser la relation la plus intime que l’on puisse avoir.
          </p>

          <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            Car pour lui, <span>vous êtes son tout premier lien.</span>
          </h4>

          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            La création de ce lien exige du temps, du dévouement et des
            connaissances. Nous devons savoir où nous voulons aller, ce que nous
            voulons construire avec notre enfant, quelles valeurs nous voulons
            lui transmettre. Ensemble, vous créerez votre propre histoire,
            pleine d’expériences merveilleuses.
          </p>
        </SectionManifesto>

        <SectionManifesto article="article2">
          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            Je vous propose de vous accompagner dans cette réflexion grâce à{" "}
            <Link to="/fr/methode" className={classes.blueText}>
              la thérapie analytique
            </Link>{" "}
            et{" "}
            <Link to="/fr/methode" className={classes.blueText}>
              l’orientation à la maternité
            </Link>
            . en vous offrant un lieu de confiance et de confidentialité.
          </p>

          <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            Un espace bienveillant, sans jugement, où vous pourrez exprimer vos
            doutes, vos peurs et parler sans tabous de la difficulté d’être
            mère.
          </h4>

          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            A travers un travail d’introspection, nous regarderons ensemble ce
            que vous avez déjà vécu, pour le comprendre, le reconnaître et
            l’affronter. Aller à l’origine permet la remise en question et ainsi
            changer ou maintenir des modes de fonctionnements dans votre vie de
            mère.
          </p>
        </SectionManifesto>

        <SectionManifesto article="article3">
          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            Je vous aiderai à reconnaître ce qui est essentiel pour vous et à
            prendre les décisions qui vous paraissent justes.
          </p>

          <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            Vous êtes acteur de votre vie. Je vous aiderai à vous donner les
            moyens de vous trouver et de construire votre place dans la
            dynamique familiale.
          </h4>

          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            La maternité n’est pas innée pour toutes, la capacité de se
            connecter à notre bébé se construit avec le temps. Nous verrons
            naître votre conscience en tant que mère. Mon travail est de vous
            accompagner dans ce moment plein de confusion et de beauté.
          </p>
        </SectionManifesto>

        <div className={classes.article + " " + classes.lastArticle}>
          <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
            Votre enfant est né.{" "}
            <span className={classes.italic}>La mère en vous</span>{" "}
            <span className={classes.italic}>est née avec lui.</span>
          </p>
        </div>

        <FooterManifesto />
      </div>
    </Layout>
  )
}

export default Manifeste
