import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import classes from "./Navbar.module.css"
import crossIcon from "../images/cross.webp"

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  const [mobNavOpen, setMobNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!mobNavOpen) {
        const currentScrollPos = window.pageYOffset
        const visibility = scrollY === 0 || scrollY > currentScrollPos

        setScrollY(currentScrollPos)
        setVisible(visibility)
      }
    }

    window.addEventListener("scroll", e => handleScroll())

    return () => {
      window.removeEventListener("scroll", e => handleScroll())
    }
  }, [scrollY, mobNavOpen])

  let styleContainer = classes.Container

  if (!visible) {
    styleContainer = classes.Container + " " + classes.closed
  }

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
        <div className={className} activeClassName={classes.activeNavLink}>
          <ul>
            <Link to="/fr/manifeste" activeClassName={classes.activeNavLink}>
              <li>Manifeste</li>
            </Link>
            <Link to="/fr/methode" activeClassName={classes.activeNavLink}>
              <li>Méthode</li>
            </Link>
            <Link to="/fr/bio" activeClassName={classes.activeNavLink}>
              <li>Bio</li>
            </Link>
            <Link to="/fr/contact" activeClassName={classes.activeNavLink}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      )
    } else if (currentPath.includes("/cat")) {
      return (
        <div className={className}>
          <ul>
            <Link to="/cat/manifest" activeClassName={classes.activeNavLink}>
              <li>Manifest</li>
            </Link>
            <Link to="/cat/metode" activeClassName={classes.activeNavLink}>
              <li>Mètode</li>
            </Link>
            <Link to="/cat/bio" activeClassName={classes.activeNavLink}>
              <li>Bio</li>
            </Link>
            <Link to="/cat/contact" activeClassName={classes.activeNavLink}>
              <li>Contacte</li>
            </Link>
          </ul>
        </div>
      )
    } else {
      return (
        <div className={className}>
          <ul>
            <Link to="/manifesto" activeClassName={classes.activeNavLink}>
              <li>Manifesto</li>
            </Link>
            <Link to="/metodo" activeClassName={classes.activeNavLink}>
              <li>Método</li>
            </Link>
            <Link to="/bio" activeClassName={classes.activeNavLink}>
              <li>Bio</li>
            </Link>
            <Link to="/contact" activeClassName={classes.activeNavLink}>
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
    <div className={styleContainer}>
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
    </div>
  )
}

export default Navbar
