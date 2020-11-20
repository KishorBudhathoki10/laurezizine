import React from "react"

import classes from "./segment.module.css"

const Segment = ({ children }) => {
  return <section className={classes.segment}>{children}</section>
}

export default Segment
