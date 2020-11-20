import React from "react"

import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={classes.Navbar} id="name">
      <div className={classes.NavDesk}>
        <div className={classes.container}>
          <h1>Laure Zizine</h1>

          <p>
            <span>FR</span>/<span>CAT</span>/<span>ES</span>
          </p>
        </div>

        <div className={classes.links}>
          <ul>
            <li>Manifesto</li>
            <li>Método</li>
            <li>Bio</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>

      <div className={classes.NavMob}>
        <h1>Laure Zizine</h1>

        <div className={classes.icon}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
