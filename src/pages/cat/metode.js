import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import HeaderMetodo from "../../components/headerMetodo"
import Section from "../../components/sectionMetodo"
import classes from "../../css/metodo.module.css"

const metode = () => {
  return (
    <Layout>
      <HeaderMetodo />

      <Section article="article1">
        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La Teràpia Analítica
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La Teràpia Analítica és una teràpia verbal, que permet reflexionar,
          elaborar, qüestionar. No hi ha ni dolentes ni bones paraules No es
          contempla plantejar cap judici. És un temps i un espai que ens pertany
          i que ens permet manejar els nostres sofriments.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Aquesta teràpia permet permet fer un treball d'introspecció,
          desenvolupar els nostres pensaments, associar idees lliurement i
          qüestionar-nos en un intercanvi «cara a cara», amb el terapeuta. El
          fet d'expressar tot el que tens al cap, sense moderació, permet
          progressar en l'exploració de la teva psique i el coneixement de tu
          mateix.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Ens demanen quin és l'origen dels nostres problemes per a comprendre
          els seus mecanismes inconscients i així identificar les seves causes.
          Al analitzar-les les reconeixem, les comprenem i podem canviar certes
          maneres de funcionament per acabar disminuint episodis d’angoixa.
          Aquest procés de comprensió té com a objectiu la desaparició dels
          problemes. Transformar la situació per emprendre nous canvis a la
          vida.
        </p>
      </Section>

      <Section article="article2">
        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Orientar <span>la maternitat</span>
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Gràcies a l'escolta, l'assessorament, la informació, l'orientació en
          la maternitat ajuda a reconèixer-se a si mateixa en el seu paper de
          mare i en el seu paper en la família. És una orientació que permet
          desenvolupar una millor qualitat de la funció maternal, valorant les
          pròpies competències de la mare. Cada història és única i mereix una
          atenció especial.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          L'orientació en la maternitat porta la persona a establir vincles
          entre la seva conducta materna i els records de la seva pròpia
          infància. Això permet convertir-se en la mare que desitges, i donar
          als seus fills els valors que has triat, i viure així la teva
          maternitat de manera conscient.
        </p>
      </Section>

      <Link to="/cat/contact" className={classes.link}>
        CONTACTE
      </Link>
    </Layout>
  )
}

export default metode
