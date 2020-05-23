import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import IndexImage from "../components/images/indexImage"
import SEO from "../components/seo"
import theme from '../components/theme'
import {ThemeProvider, Grid, Typography, Button, Card} from '@material-ui/core'
import IndexLayout from '../components/IndexLayout'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <IndexLayout>
      <ThemeProvider theme={theme}>
      <div style={{minHeight: '100vh'}}>
        <SEO title="Home" />
          <Grid id='index1' container justify='flex-start' alignItems='center'>
            <Grid item xs={12} sm={6}>
              <div style={{padding: '3em', color: theme.palette.secondary.main}}>
                Blockchain Technology for NYC
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <IndexImage />
              </div>
            </Grid>
          </Grid>
         
        </div>
      </ThemeProvider>
    </IndexLayout>
  )
}

export default IndexPage
