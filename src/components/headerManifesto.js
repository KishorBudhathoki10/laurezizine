import React from "react"
import backgroundImage from "../images/bottomManifesto.png"

import classes from "./headerManifesto.module.css"

const ES = {
  header: (
    <h2>
      El Primer <span>Vínculo</span>
    </h2>
  ),
  content1: (
    <div>
      <p>Quieres tener un hijo.</p>
      <p>¡Estás embarazada! ¡Ya llegó el bebé!</p>
    </div>
  ),
  content2: (
    <div>
      <p>
        Son momentos llenos de felicidad. Pero también son tiempos perturbadores
        que causan cansancio, y a veces hasta angustia o culpa…
      </p>
    </div>
  ),
}

const CAT = {
  header: (
    <h2>
      El Primer <span>Vincle</span>
    </h2>
  ),
  content1: (
    <div>
      <p>Vols tenir un fill.</p>
      <p>Estàs embarassada! Ja arriba el bebè!</p>
    </div>
  ),
  content2: (
    <div>
      <p>
        És un moment de joia. Però també és un moment pertorbador que sol ésser
        motiu de cansament, i a vegades d’angoixa i fins i tot de culpa…
      </p>
    </div>
  ),
}

const FR = {
  header: (
    <h2>
      Le Primer <span>Lien</span>
    </h2>
  ),
  content1: (
    <div>
      <p>Vous désirez avoir un enfant.</p>
      <p>Vous êtes enceinte! Le bébé est là!</p>
    </div>
  ),
  content2: (
    <div>
      <p>
        Ce sont des moments de bonheur. Mais ce sont aussi des périodes
        bouleversantes qui causent de la fatigue, parfois de l’angoisse et même
        la culpabilité.
      </p>
    </div>
  ),
}

const languageHandler = key => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  if (url.includes("/cat")) {
    return CAT[key]
  } else if (url.includes("/fr")) {
    return FR[key]
  } else {
    return ES[key]
  }
}

const headerManifesto = () => {
  return (
    <div
      className={classes.header}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.header_wrapper}>
        {languageHandler("header")}

        <div className={classes.header_content}>
          {languageHandler("content1")}
          {languageHandler("content2")}
        </div>
      </div>
    </div>
  )
}

export default headerManifesto
