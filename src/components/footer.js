import React from "react"

import classes from "./footer.module.css"
import arrowUp from "../images/uparrow.png"

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h4>&copy; Laure Zizine 2020</h4>
      <a href="#top">Top ↑</a>
    </div>
  )
}

export default Footer
