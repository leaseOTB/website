import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import IndexImage from "../components/images/indexImage"
import IndexImage1 from '../components/images/indexImage1'

import SEO from "../components/seo"
import theme from '../components/theme'
import {ThemeProvider, Grid, Hidden, Typography, Button, Card} from '@material-ui/core'
import IndexLayout from '../components/IndexLayout'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <IndexLayout>
      <ThemeProvider theme={theme}>
      <div style={{minHeight: '70vh'}}>
        <SEO title="Home" />
          <div style={{padding: '2em', marginBottom: '-3em'}} >
          <Typography id='platform' variant='h3' color='secondary' style={{cursor: 'default'}}>What is Lease on the Block?</Typography>
          <br/>
          <br/>
          <br/>

            <Grid container direction='row' justify='center' alignItems='center' >
              <Grid item xs={12} sm={6} >
                <Typography variant='h6' color='secondary'>Lease on the Block is a governance product designed to preserve affordable housing apartments in New York City.</Typography>
                <br/>
                <br/>
                <Typography variant='body1' color='secondary'>We use innovative technology to create collaboration between Tenants, Affordable Housing Agencies and the Real Estate industry.</Typography>  
              </Grid>
              <Hidden smDown>
              <Grid item xs={12} sm={6}>
                <IndexImage />
              </Grid>
              </Hidden>

            </Grid>
            <br/>
            <br/>

            <br/>

            <br/>
            <Grid container direction='row' justify='center' alignItems='center'>
              <Grid item xs={12} sm={6}>
                <IndexImage1 />
              </Grid>
              <Grid item xs={12} sm={6} >
                <Typography variant='body1' color='secondary'>Under the hood we use a decentralized private ledger that offers a one stop shop for saving, tracking and storing information about rent-stabilized apartments.</Typography>  
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    </IndexLayout>
  )
}

export default IndexPage
