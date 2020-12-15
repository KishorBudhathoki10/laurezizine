import React from "react"
import sal from "sal.js"

import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  sal()

  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
