// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {ThemeProvider, Grid, Typography, Button, Card, IconButton} from '@material-ui/core'
import theme from '../components/theme'

const Careers = (props: PageProps) => (
  <Layout page={props.path}>
    <ThemeProvider theme={theme}>
    <SEO title="Careers" />
      <br/>
      <br/>
      <br/>
      <br/>

      <Typography variant='h2' color='secondary' style={{cursor: 'default'}}>Internship Program</Typography>
      <br/>
      <br/>     
      <br/>
    </ThemeProvider>
  </Layout>
)

export default Careers
