import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"
// import backgroundImage from "../../images/bgManifesto.png"
import classes from "../../css/manifesto.module.css"
import SectionManifesto from "../../components/sectionManifesto"

export const query = graphql`
  {
    momChild: file(relativePath: { eq: "mumkidManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    family: file(relativePath: { eq: "familyManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    littleGirl: file(relativePath: { eq: "littlegirlManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    bottomBackground: file(relativePath: { eq: "bottomManifesto.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Manifeste = () => {
  const { momChild, family, littleGirl, bottomBackground } = useStaticQuery(
    query
  )

  console.log(family)

  return (
    <Layout>
      <div className={classes.Manifesto}>
        <div
          className={classes.header}
          // style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={classes.header_wrapper}>
            <h2>
              Le Primer <span>Lien</span>
            </h2>

            <div className={classes.header_content}>
              <div>
                <p>Vous désirez avoir un enfant.</p>
                <p>Vous êtes enceinte! Le bébé est là!</p>
              </div>
              <div>
                <p>
                  Ce sont des moments de bonheur. Mais ce sont aussi des
                  périodes bouleversantes qui causent de la fatigue, parfois de
                  l’angoisse et même la culpabilité.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.article}>
          <p>
            Les émotions sont exacerbées, le corps se transforme, et on peut se
            sentir dépassé.
          </p>
        </div>

        <div className={classes.article}>
          <p>
            Nous sommes confrontés à des questions intimes et profondes, mais
            aussi pratiques.
          </p>
        </div>

        <SectionManifesto image={momChild} imageText="Mom Child Image">
          <p>
            La maternité est l’un des défis les plus importants de la vie d’une
            femme. Celui de commencer une merveilleuse aventure avec notre
            enfant. Celui de porter un nouveau regard sur nous-mêmes. Celui de
            tisser la relation la plus intime que l’on puisse avoir.
          </p>

          <h4>
            Car pour lui, <span>vous êtes son tout premier lien.</span>
          </h4>

          <p>
            La création de ce lien exige du temps, du dévouement et des
            connaissances. Nous devons savoir où nous voulons aller, ce que nous
            voulons construire avec notre enfant, quelles valeurs nous voulons
            lui transmettre. Ensemble, vous créerez votre propre histoire,
            pleine d’expériences merveilleuses.
          </p>
        </SectionManifesto>

        <SectionManifesto image={family} imageText="Family Image">
          <p>
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

          <h4>
            Un espai comprensiu, sense judici, on podràs expressar les teves
            idees, els teus dubtes i les teves pors, i parlar sense tabús de la
            dificultat de ser mare.
          </h4>

          <p>
            Mitjançant d'un treball d'introspecció, mirarem juntes el que ja has
            viscut, per comprendre-ho, reconèixer-ho i afrontar-ho. Anar cap a
            l'origen permet qüestionar-se i així canviar o mantenir maneres de
            funcionament en la teva vida actual.
          </p>
        </SectionManifesto>

        <SectionManifesto image={littleGirl} imageText="Little Girl Image">
          <p>
            T'ajudaré a reconèixer el que és essencial per a tu i a prendre les
            decisions que sentis correctes.
          </p>

          <h4>
            Un és actor de la seva pròpia vida. Jo t'ajudaré a donar-te els
            mitjans per trobar-te i construir el teu lloc en la família.
          </h4>

          <p>
            La maternitat no és innata per a totes, la capacitat de
            relacionar-nos amb el nostre bebè es construeix amb el temps. Veurem
            néixer la teva consciència com a mare. El meu treball és
            acompanyar-te en aquests moments plens de confusió i de bellesa.
          </p>
        </SectionManifesto>

        <div className={classes.article + " " + classes.lastArticle}>
          <p>
            Ha nascut el teu fill.{" "}
            <span className={classes.italic}>La mare que hi ha en tu</span>{" "}
            <span className={classes.italic}>ha nascut amb ell.</span>
          </p>
        </div>

        <BackgroundImage
          Tag={`div`}
          fluid={bottomBackground.childImageSharp.fluid}
          className={classes.footer}
          backgroundColor={`#FFAE07`}
        >
          <div>
            <h3>
              Parlem sense compromís, et convido a establir una primera cita
              gratuïta per conèixer-nos.
            </h3>

            <h3>
              Decidiràs tranquil·lament si vols que comencem a caminar juntes.
            </h3>

            <h3>
              <span className={classes.block}>t: 930 384 721</span>
              <span className={classes.block}>m: 665 335 599</span>
            </h3>
          </div>
        </BackgroundImage>
      </div>
    </Layout>
  )
}

export default Manifeste
