// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {ThemeProvider, Grid, Typography, Button, Card, IconButton} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import theme from '../components/theme'
import Zach from '../components/images/team/zach'
import Redwan from '../components/images/team/redwan'

const Platform = (props: PageProps) => (
  <Layout page={props.path}>
    <ThemeProvider theme={theme}>
      <SEO title="Platform" />
      <br/>
      <br/>
      <br/>
      <br/>

      <Typography id='platform' variant='h3' color='secondary' style={{cursor: 'default'}}>Platform and Technologies</Typography>
      <br/>
      <br/>     
      <br/>

      <Typography id='demo' variant='h3' color='secondary' style={{cursor: 'default'}}>New York City Demo</Typography>

    </ThemeProvider>
  </Layout>
)

export default Platform
