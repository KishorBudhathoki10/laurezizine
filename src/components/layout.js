import React from "react"

import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
