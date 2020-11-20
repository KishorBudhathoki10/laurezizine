import React from "react"
import { Link } from "gatsby"

import classes from "./link.module.css"

const Channel = ({ url, text }) => {
  return (
    <Link to={url} className={classes.link}>
      {text}
    </Link>
  )
}

export default Channel
