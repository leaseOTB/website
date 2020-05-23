import React from "react"

import {PageProps} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (props: PageProps) => {
  return (
    <Layout> 
      <SEO title="404" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
