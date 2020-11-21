import React from "react"

import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
