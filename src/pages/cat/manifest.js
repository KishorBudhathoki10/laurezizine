import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import classes from "../../css/manifesto.module.css"
import SectionManifesto from "../../components/sectionManifesto"
import Header from "../../components/headerManifesto"
import FooterManifesto from "../../components/footerManifesto"
import SEO from "../../components/SEO"

const Manifest = () => {
  return (
    <Layout>
      <SEO title="Manifest" description="Manifest page" />

      <Header />

      <div
        className={classes.article}
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="2000"
      >
        <p>
          Les emocions s'exacerben, el cos es transforma, la parella se sotmet a
          una nova incògnita i una pot sentir-se superada.
        </p>
      </div>

      <div
        className={classes.article}
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="2000"
      >
        <p>
          Ens enfrontem a interrogants íntims i profunds, i a la inquietud de
          resoldre problemes pràctics.
        </p>
      </div>

      <SectionManifesto article="article1">
        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Estem davant d’un dels reptes més importants de la nostra vida. El
          d'iniciar una relació meravellosa amb el nostre fill, també amb la
          nostra parella i sobretot amb nosaltres mateixa. El de teixir el llaç
          més íntim que un ésser humà pot arribar a tenir.
        </p>

        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Per al teu fill, tu ets <span>el primer vincle.</span>
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La creació d'aquest vincle requereix temps, dedicació i coneixement.
          Necessitem saber on volem anar, què volem construir amb el nostre
          fill, quins valors li volem transmetre. Junts creareu la vostra pròpia
          història, plena d'experiències meravelloses.
        </p>
      </SectionManifesto>

      <SectionManifesto article="article2">
        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
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

        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Un espai comprensiu, sense judici, on podràs expressar les teves
          idees, els teus dubtes i les teves pors, i parlar sense tabús de la
          dificultat de ser mare.
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Mitjançant d'un treball d'introspecció, mirarem juntes el que ja has
          viscut, per comprendre-ho, reconèixer-ho i afrontar-ho. Anar cap a
          l'origen permet qüestionar-se i així canviar o mantenir maneres de
          funcionament en la teva vida actual.
        </p>
      </SectionManifesto>

      <SectionManifesto article="article3">
        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          T'ajudaré a reconèixer el que és essencial per a tu i a prendre les
          decisions que consideris correctes.
        </p>

        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Un és actor de la seva pròpia vida. Jo t'ajudaré a donar-te els
          mitjans per trobar-te i construir el teu lloc en la família.
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La maternitat no és un instint innat per a totes les dones, la
          capacitat de relacionar-nos amb el nostre bebè es construeix amb el
          temps. Veurem néixer la teva consciència com a mare. El meu treball és
          acompanyar-te en aquests moments plens de confusió i de bellesa al
          mateix temps.
        </p>
      </SectionManifesto>

      <div className={classes.article + " " + classes.lastArticle}>
        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Ha nascut el teu fill.{" "}
          <span className={classes.italic}>La mare que hi ha en tu</span>{" "}
          <span className={classes.italic}>ha nascut amb ell.</span>
        </p>
      </div>

      <FooterManifesto />
    </Layout>
  )
}

export default Manifest
