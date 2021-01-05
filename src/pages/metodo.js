import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeaderMetodo from "../components/headerMetodo"
import Section from "../components/sectionMetodo"
import classes from "../css/metodo.module.css"
import SEO from "../components/SEO"

const metodo = () => {
  return (
    <Layout>
      <SEO title="Metodo" description="Method page" />
      <HeaderMetodo />

      <Section article="article1">
        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Terapia analítica
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La Terapia Analítica es una terapia verbal, que permite reflexionar,
          elaborar, cuestionar. No hay ni malas ni buenas palabras. No se
          contempla plantear ningún juico. Es un tiempo y un espacio, que nos
          pertenece y que nos permite manejar nuestros sufrimientos.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Esta terapia permite hacer un trabajo de introspección, desarrollar
          nuestros pensamientos, asociar ideas libremente y cuestionarnos en un
          intercambio «cara a cara», con la terapeuta. El hecho de expresar todo
          lo que tienes en mente, sin moderación, permite progresar en la
          exploración de tu psique y el conocimiento de ti mismo.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Nos preguntamos cual es el origen de nuestros problemas para
          comprender sus mecanismos inconscientes y así poder identificar sus
          causas. Al analizarlas se reconocen, se comprenden, y podemos entonces
          cambiar ciertos modos de funcionamiento y disminuir episodios de
          angustia. Este proceso de comprensión tiene como objetivo la
          desaparición de los problemas. Transformar la situación para emprender
          nuevos cambios en la vida.
        </p>
      </Section>

      <Section article="article2">
        <h4 data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Orientar <span>la maternidad</span>
        </h4>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          Gracias a la escucha, al asesoramiento y a la información, la
          orientación a la maternidad ayuda a reconocerse a sí misma en su papel
          de madre y de su rol en la familia. Es una orientación que permite
          desarrollar una mejor calidad de la función maternal, valorando las
          propias competencias de la madre. Cada historia es única y merece una
          atención especial.
        </p>

        <p data-sal="fade" data-sal-delay="100" data-sal-duration="2000">
          La orientación a la maternidad lleva a la persona a establecer
          vínculos entre su conducta materna y los recuerdos de su propia
          infancia. Esto permite convertirte en la madre que deseas, dar a tus
          hijos los valores que has elegido, y vivir tu maternidad de manera
          consciente.
        </p>
      </Section>

      <Link to="/contact" className={classes.link}>
        CONTACTO
      </Link>
    </Layout>
  )
}

export default metodo
