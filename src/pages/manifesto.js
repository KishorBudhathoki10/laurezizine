import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import classes from "../css/manifesto.module.css"
import SectionManifesto from "../components/sectionManifesto"
import Header from "../components/headerManifesto"
import FooterManifesto from "../components/footerManifesto"
import SEO from "../components/SEO"

const Manifesto = () => {
  return (
    <Layout>
      <SEO title="Manifesto" description="Manifest page" />

      <div className={classes.Manifesto}>
        <Header />

        <div
          className={classes.article}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="2000"
        >
          <p className={classes.firstArticle}>
            Las emociones se intensifican, el cuerpo se transforma, la pareja se
            somete a una nueva incógnita y una puede sentirse superada.
          </p>
        </div>

        <div
          className={classes.article}
          data-sal="fade"
          data-sal-delay="-20"
          data-sal-duration="1000"
        >
          <p>
            Nos enfrentamos a interrogantes íntimos y profundos, y a la
            inquietud de resolver problemas prácticos.
          </p>
        </div>

        <SectionManifesto article="article1">
          <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            Nos enfrentamos a uno de los retos más importantes de nuestra vida.
            El de iniciar una relación maravillosa con nuestro hijo, también con
            nuestra pareja y sobre todo con nosotras misma. El de tejer el lazo
            más íntimo que un ser humano tiene.
          </p>

          <h4 data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            Para tu hijo, tu eres <span>el primer vínculo.</span>
          </h4>

          <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            La creación de este vínculo requiere tiempo, dedicación y
            conocimiento. Necesitamos saber hacia dónde queremos ir, qué
            queremos construir con nuestro hijo, qué valores les queremos
            transmitir. Juntos vais a crear vuestra propia historia, llena de
            experiencias maravillosas.
          </p>
        </SectionManifesto>

        <SectionManifesto article="article2">
          <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            Te propongo acompañarte en esta reflexión mediante{" "}
            <Link to="/metodo" className={classes.blueText}>
              la Terapia Analítica
            </Link>{" "}
            y un{" "}
            <Link to="/metodo" className={classes.blueText}>
              Acompañamiento para la Maternidad
            </Link>
            . Quiero ofrecerte un lugar de confianza y de confidencialidad.
          </p>

          <h4 data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            Un espacio comprensivo, sin juicio, donde podrás expresar tus ideas,
            tus dudas y tus miedos, y hablar sin tabúes de lo difícil que es ser
            madre.
          </h4>

          <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            A través de un trabajo de introspección, miraremos juntas lo que ya
            has vivido, para comprenderlo, reconocerlo y afrontarlo. Ir hacia el
            origen permite cuestionarse y así cambiar o mantener modos de
            funcionamiento en tu vida actual.
          </p>
        </SectionManifesto>

        <SectionManifesto article="article3">
          <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            Te ayudaré a reconocer lo que es esencial para ti y a tomar las
            decisiones que consideres correctas.
          </p>

          <h4 data-sal="fade" data-sal-delay="100">
            Uno es actor de su propia vida. Yo te ayudaré a darte los medios
            para encontrarte y construir tu lugar en la familia.
          </h4>

          <p data-sal="fade" data-sal-delay="-20" data-sal-duration="1000">
            La maternidad no es un instinto innato para todas las mujeres, la
            capacidad de relacionarnos con nuestro bebé se construye con el
            tiempo. Vamos a ver nacer tu conciencia como madre. Mi trabajo
            consistirá en acompañarte en estos momentos llenos de confusión y de
            belleza al mismo tiempo.
          </p>
        </SectionManifesto>

        <div
          className={classes.article + " " + classes.lastArticle}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="2000"
        >
          <p>
            Ha nacido tu hijo.{" "}
            <span className={classes.italic}>La madre que hay en ti</span>{" "}
            <span className={classes.italic}>ha nacido con él.</span>
          </p>
        </div>

        <FooterManifesto />
      </div>
    </Layout>
  )
}

export default Manifesto
