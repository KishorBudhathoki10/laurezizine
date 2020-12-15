import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeaderMetodo from "../components/headerMetodo"
import Section from "../components/sectionMetodo"
import classes from "../css/metodo.module.css"

const metodo = () => {
  return (
    <Layout>
      <HeaderMetodo />
      <Section article="article1">
        <h4 data-sal="fade" data-sal-delay="100">
          Terapia analítica
        </h4>

        <p data-sal="fade" data-sal-delay="100">
          La Terapia Analítica es una terapia de palabra, que permite
          reflexionar, elaborar, cuestionar. No hay ni mala ni buena palabra. No
          hay ningún juicio. Es un tiempo y un espacio, que nos pertenece y que
          nos permite manejar nuestros sufrimientos.
        </p>

        <p data-sal="fade" data-sal-delay="100">
          Esta terapia permite hacer un trabajo de introspección, desarrollar
          nuestros pensamientos, asociar ideas libremente y cuestionarnos en un
          intercambio «cara a cara», con el terapeuta. El hecho de expresar todo
          lo que tienes en mente, sin moderación, permite progresar en la
          exploración de tu psique y el conocimiento de ti mismo.
        </p>

        <p data-sal="fade" data-sal-delay="100">
          Nos preguntamos cual es el origen de nuestros problemas para
          comprender sus mecanismos inconscientes y así las causas pueden ser
          identificadas, y siendo analizadas, reconocidas, comprendidas, podemos
          entonces cambiar ciertos modos de funcionamiento y disminuir una
          angustia. Esta comprensión tiene como objetivo la desaparición de sus
          problemas, así la situación puede ser transformada y la vida cambiada.
        </p>
      </Section>

      <Section article="article2">
        <h4 data-sal="fade" data-sal-delay="100">
          Orientar <span>la maternidad</span>
        </h4>

        <p data-sal="fade" data-sal-delay="100">
          Gracias a la escucha, el asesoramiento, la información, la orientación
          a la maternidad ayuda a reconocerse a sí mismo en su papel de madre y
          en su role en la familia. Es una orientación que permite desarrollar
          una mejor calidad de la función maternal, valorizando las propias
          competencias de la madre. Cada historia es única y merece una atención
          especial.
        </p>

        <p data-sal="fade" data-sal-delay="100">
          La orientación a la maternidad lleva la persona a establecer vínculos
          entre su conducta materna y los recuerdos de su propia infancia. Esto
          permite convertirse en la madre que deseas, y dar a sus hijos los
          valores que has elegido, y vivir así su maternidad de manera
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
