import React from "react"
import { Link } from "gatsby"

import classes from "./Navbar.module.css"
import { useState } from "react"
import crossIcon from "../images/cross.webp"

const Navbar = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false)

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : ""

  const Title = () => {
    let path = "/"

    if (currentPath.includes("/cat")) {
      path = "/cat"
    } else if (currentPath.includes("/fr")) {
      path = "/fr"
    }

    return (
      <Link to={path}>
        <h1>
          Laure <span>Zizine</span>
        </h1>
      </Link>
    )
  }

  const navLinks = className => {
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

  const createLangLinks = (arr, seperator) => {
    // Array must always be in order of French, Catalan and Spanish

    return (
      <p>
        <span>{createLink(arr[0], "FR")}</span>
        {seperator}
        <span>{createLink(arr[1], "CAT")}</span>
        {seperator}
        <span>{createLink(arr[2], "ES")}</span>
      </p>
    )
  }

  const linkAccordingly = (seperator = "") => {
    const manifest = ["/fr/manifeste", "/cat/manifest", "/manifesto"]
    const method = ["/fr/methode", "/cat/metode", "/metodo"]
    const bio = ["/fr/bio", "/cat/bio", "/bio"]
    const contact = ["/fr/contact", "/cat/contact", "/contact"]
    const home = ["/fr", "/cat", "/"]

    if (manifest.includes(currentPath)) {
      return createLangLinks(manifest, seperator)
    } else if (method.includes(currentPath)) {
      return createLangLinks(method, seperator)
    } else if (bio.includes(currentPath)) {
      return createLangLinks(bio, seperator)
    } else if (contact.includes(currentPath)) {
      return createLangLinks(contact, seperator)
    } else if (home.includes(currentPath)) {
      return createLangLinks(home, seperator)
    }
  }

  return (
    <>
      <div className={classes.Navbar} id="name">
        <div className={classes.NavDesk}>
          <div className={classes.container}>
            <Title />

            {linkAccordingly("/")}
          </div>

          {navLinks(classes.links)}
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
        {navLinks(classes.links)}

        {linkAccordingly()}
      </div>
    </>
  )
}

export default Navbar
