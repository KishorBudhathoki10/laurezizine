import React from "react"

import Layout from "../../components/layout"
import Contact from "../../components/contact"
import SEO from "../../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contacte" description="Contact page" />
      <Contact />
    </Layout>
  )
}

export default contact
