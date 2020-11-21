import React from "react"
import { Link } from "gatsby"

import classes from "./Navbar.module.css"
import { useState } from "react"
import crossIcon from "../images/cross.webp"

const Navbar = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false)

  const currentPath = window.location.pathname

  const Title = () => {
    let path = "/"

    if (currentPath.includes("/cat")) {
      path = "/cat"
    } else if (currentPath.includes("/fr")) {
      path = "/fr"
    }

    return (
      <Link to={path}>
        <h1>Laure Zizine</h1>
      </Link>
    )
  }

  const links = className => {
    console.log(className)
    if (currentPath.includes("/fr")) {
      return (
        <div className={className}>
          <ul>
            <Link to="/fr/manifeste">
              <li>Manifeste</li>
            </Link>
            <Link to="/fr/methode">
              <li>Méthode</li>
            </Link>
            <Link to="/fr/bio">
              <li>Bio</li>
            </Link>
            <Link to="/fr/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      )
    } else if (currentPath.includes("/cat")) {
      return (
        <div className={className}>
          <ul>
            <Link to="/cat/manifest">
              <li>Manifest</li>
            </Link>
            <Link to="/cat/metode">
              <li>Mètode</li>
            </Link>
            <Link to="/cat/bio">
              <li>Bio</li>
            </Link>
            <Link to="/cat/contact">
              <li>Contacte</li>
            </Link>
          </ul>
        </div>
      )
    } else {
      return (
        <div className={className}>
          <ul>
            <Link to="/manifesto">
              <li>Manifesto</li>
            </Link>
            <Link to="/metodo">
              <li>Método</li>
            </Link>
            <Link to="/bio">
              <li>Bio</li>
            </Link>
            <Link to="/contact">
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
      )
    }
  }

  const createLink = (path, text) => {
    return (
      <Link
        to={path}
        className={currentPath === path ? classes.activeLang : null}
      >
        {text}
      </Link>
    )
  }

  const createLangLinks = arr => {
    // Array must always be in order of French, Catalan and Spanish

    return (
      <p>
        <span>{createLink(arr[0], "FR")}</span>/
        <span>{createLink(arr[1], "CAT")}</span>/
        <span>{createLink(arr[2], "ES")}</span>
      </p>
    )
  }

  const linkAccordingly = () => {
    const manifest = ["/fr/manifeste", "/cat/manifest", "/manifesto"]
    const method = ["/fr/methode", "/cat/metode", "/metodo"]
    const bio = ["/fr/bio", "/cat/bio", "/bio"]
    const contact = ["/fr/contact", "/cat/contact", "/contact"]
    const home = ["/fr", "/cat", "/"]

    if (manifest.includes(currentPath)) {
      return createLangLinks(manifest)
    } else if (method.includes(currentPath)) {
      return createLangLinks(method)
    } else if (bio.includes(currentPath)) {
      return createLangLinks(bio)
    } else if (contact.includes(currentPath)) {
      return createLangLinks(contact)
    } else if (home.includes(currentPath)) {
      return createLangLinks(home)
    }
  }

  return (
    <>
      <div className={classes.Navbar} id="name">
        <div className={classes.NavDesk}>
          <div className={classes.container}>
            <Title />

            {linkAccordingly()}
          </div>

          {links(classes.links)}
        </div>

        <div className={classes.NavMob}>
          <Title />

          {mobNavOpen ? (
            <div
              className={classes.crossIcon}
              onClick={() => setMobNavOpen(false)}
              onKeyDown={() => setMobNavOpen(false)}
              role="button"
              tabIndex={0}
            >
              <img src={crossIcon} alt="cross icon" />
            </div>
          ) : (
            <div
              className={classes.icon}
              onClick={() => setMobNavOpen(true)}
              onKeyDown={() => setMobNavOpen(true)}
              role="button"
              tabIndex={0}
            >
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>

      <div className={mobNavOpen ? classes.NavMobClose : classes.hide}>
        {links(classes.links)}

        <p>
          <span>{createLink("/fr", "FR")}</span>
          <span>{createLink("/cat", "CAT")}</span>
          <span>{createLink("/", "ES")}</span>
        </p>
      </div>
    </>
  )
}

export default Navbar
