import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import classes from "../css/manifesto.module.css"
import SectionManifesto from "../components/sectionManifesto"
import Header from "../components/headerManifesto"
import FooterManifesto from "../components/footerManifesto"

const Manifesto = () => {
  return (
    <Layout>
      <div className={classes.Manifesto}>
        <Header />

        <div className={classes.article}>
          <p>
            Las emociones se exacerban, el cuerpo se transforma, y una puede
            sentirse superada.
          </p>
        </div>

        <div className={classes.article}>
          <p>
            Nos enfrentamos a interrogantes íntimos y profundos, y también
            prácticos.
          </p>
        </div>

        <SectionManifesto article="article1">
          <p>
            Estamos ante uno de los retos más importantes de nuestra vida. El de
            iniciar una relación única con nuestro hijo. El de establecer una
            nueva relación con nosotras mismas. El de tejer el lazo más íntimo
            que un ser humano tiene.
          </p>

          <h4>
            Para él, tu eres <span>el primer vínculo.</span>
          </h4>

          <p>
            La creación de este vínculo requiere tiempo, dedicación y
            conocimiento. Necesitamos saber hacia dónde queremos ir, qué
            queremos construir con nuestro hijo, qué valores le queremos
            transmitir. Juntos creareis vuestra propia historia, llena de
            experiencias maravillosas.
          </p>
        </SectionManifesto>

        <SectionManifesto article="article2">
          <p>
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

          <h4>
            Un espacio comprensivo, sin juicio, donde podrás expresar tus ideas,
            tus dudas y tus miedos, y hablar sin tabúes de lo difícil que es ser
            madre.
          </h4>

          <p>
            A través de un trabajo de introspección, miraremos juntas lo que ya
            has vivido, para comprenderlo, reconocerlo y afrontarlo. Ir hacia el
            origen permite cuestionarse y así cambiar o mantener modos de
            funcionamiento en tu vida actual.
          </p>
        </SectionManifesto>

        <SectionManifesto article="article3">
          <p>
            Te ayudaré a reconocer lo que es esencial para ti y a tomar las
            decisiones que sientas correctas.
          </p>

          <h4>
            Uno es actor de su vida. Yo te ayudaré a darte los medios para
            construir tu lugar en la familia.
          </h4>

          <p>
            La maternidad no es innata para todas, la capacidad de relacionarnos
            con nuestro bebé se construye con el tiempo. Vamos a ver nacer tu
            conciencia como madre. Mi trabajo consistirá en acompañarte en estos
            momentos llenos de confusión y de belleza.
          </p>
        </SectionManifesto>

        <div className={classes.article + " " + classes.lastArticle}>
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
