import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"
import backgroundImage from "../../images/bgManifesto.png"
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

const Manifest = () => {
  const { momChild, family, littleGirl, bottomBackground } = useStaticQuery(
    query
  )

  console.log(family)

  return (
    <Layout>
      <div className={classes.Manifesto}>
        <div
          className={classes.header}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={classes.header_wrapper}>
            <h2>
              El Primer <span>Vincle</span>
            </h2>

            <div className={classes.header_content}>
              <div>
                <p>Vols tenir un fill.</p>
                <p>Estàs embarassada! Ja arriba el bebè!</p>
              </div>
              <div>
                <p>
                  És un moment de joia. Però també és un moment pertorbador que
                  sol ésser motiu de cansament, i a vegades d’angoixa i fins i
                  tot de culpa…
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.article}>
          <p>
            Les emocions s'exacerben, el cos es transforma, i una pot sentir-se
            superada. Ens enfrontem a interrogants íntims i profunds, i també
            pràctics.
          </p>
        </div>

        <div className={classes.article}>
          <p>
            Estem davant d'interrogants íntims i profunds, i també pràctics.
          </p>
        </div>

        <SectionManifesto image={momChild} imageText="Mom Child Image">
          <p>
            Estem davant d’un dels reptes més importants de la nostra vida. El
            d'iniciar una relació meravellosa amb el nostre fill. El d'establir
            una nova relació amb nosaltres mateixes. El de teixir el llaç més
            íntim que un ésser humà pot arribar a tenir.
          </p>

          <h4>
            Per a ell, tu ets <span>el primer vincle.</span>
          </h4>

          <p>
            La creació d'aquest vincle requereix temps, dedicació i coneixement.
            Necessitem saber on volem anar, què volem construir amb el nostre
            fill, quins valors li volem transmetre. Junts creareu la vostra
            pròpia història, plena d'experiències meravelloses.
          </p>
        </SectionManifesto>

        <SectionManifesto image={family} imageText="Family Image">
          <p>
            Et proposo d’acompanyar-te en aquesta reflexió mitjançant{" "}
            <Link to="/cat/metode" className={classes.blueText}>
              la Teràpia Analítica
            </Link>{" "}
            i{" "}
            <Link to="/cat/metode" className={classes.blueText}>
              l'Orientació per a la Maternitat
            </Link>
            . Vull oferir-te un lloc de confiança i de confidencialitat.
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

export default Manifest
