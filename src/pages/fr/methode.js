import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import HeaderMetodo from "../../components/headerMetodo"
import Section from "../../components/sectionMetodo"
import classes from "../../css/metodo.module.css"

const methode = () => {
  return (
    <Layout>
      <HeaderMetodo />

      <Section article="article1">
        <h4>La Teràpia Analítica</h4>

        <p>
          La Teràpia Analítica és una teràpia de la paraula, que permet
          reflexionar, elaborar, qüestionar. No hi ha ni dolenta ni bona
          paraula. No hi ha cap judici. És un temps i un espai, que ens pertany
          i que ens permet tractar amb els nostres sofriments.
        </p>

        <p>
          Aquesta teràpia permet realitzar una feina d'introspecció,
          desenvolupar els nostres pensaments, associar idees lliurement i
          qüestionar-nos en un intercanvi «cara a cara», amb el terapeuta. El
          fet d'expressar tot el que tens al cap, sense moderació, permet
          progressar en l'exploració de la teva psique i el coneixement de tu
          mateix.
        </p>

        <p>
          Ens demanen quin és l'origen dels nostres problemes per a comprendre
          els seus mecanismes inconscients i així les causes poden ser
          identificades, i sent analitzades, reconegudes, compreses, podem
          llavors canviar unes certes maneres de funcionament i disminuir una
          angoixa. Aquesta comprensió té com a objectiu la desaparició dels seus
          problemes, així la situació pot ser transformada i la vida canviada.
        </p>
      </Section>

      <Section article="article2">
        <h4>
          Orientar <span>la maternitat</span>
        </h4>

        <p>
          Gràcies a l'escolta, l'assessorament, la informació, l'orientació a la
          maternitat ajuda a reconèixer-se a si mateix en el seu paper de mare i
          en el seu paper en la família. És una orientació que permet
          desenvolupar una millor qualitat de la funció maternal, valorant les
          pròpies competències de la mare. Cada història és única i mereix una
          atenció especial.
        </p>

        <p>
          L'orientació a la maternitat porta la persona a establir vincles entre
          la seva conducta materna i els records de la seva pròpia infància.
          Això permet convertir-se en la mare que desitges, i donar als seus
          fills els valors que has triat, i viure així la seva maternitat de
          manera conscient.
        </p>
      </Section>

      <Link to="/fr/contact" className={classes.link}>
        CONTACTE
      </Link>
    </Layout>
  )
}

export default methode
