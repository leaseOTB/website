// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {ThemeProvider, Grid, Typography, Button, Card, Hidden, IconButton} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import scrollTo from 'gatsby-plugin-smoothscroll'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import theme from '../components/theme'

import PlatformETH from '../components/images/platformETH'
import PlatformToken from '../components/images/platformToken'
import PlatformLogo from '../components/images/platformLogo.js'

const Platform = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <SEO title="Platform" />
      <br id='intro'/>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <div style={{padding: '2em'}}>
      <Typography id='platform' variant='h2' color='secondary' style={{cursor: 'default'}}>Platform</Typography>
      <br/>
      <br/>
        <Grid container direction='row' justify='space-around' alignItems='center' spacing={0} >
          <Grid item xs={12} sm={6} >
            <hr/>
            <Typography variant='body1' color='secondary'>The Lease on the Block platform is a containerized private Ethereum network for lease processing and storage.</Typography>  
            <br/> 
            <Typography variant='body1' color='secondary'>Role tokens establish idenity, smart contracts create, store, and modify lease and property documents.</Typography>  
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <PlatformETH />
            </Grid>
          </Hidden>
          {/*
          <Grid item>
            <div  onClick={() => scrollTo('#demo')} style={{ cursor: 'grab', float: 'none', margin: '2em auto'}}>
              <div
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: `none`,
                  cursor: 'pointer',
                }}
              >
                <KeyboardArrowDownIcon style={{fontSize: '6em'}} />
              </div>  
            </div>
          </Grid>
          
          
          */}
          
        </Grid>
        <br id='demo'/>
        <br />
        <br/>
        <br/>
        <Typography  variant='h4' color='secondary' style={{cursor: 'default'}}>New York City - Demo</Typography>
        <br/>
        <br/>
        <br/>
        <Grid container direction='row' justify='center' alignItems='center' spacing={0} >
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <PlatformLogo />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={6} >
            <hr/>
            <Typography variant='body1' color='secondary'>Our NYC demo was awarded 1st place in the Sustianable Cities Catagory of the 2020 BSIC Hackathon.</Typography>  
            <br/> 
            <Button href='https://nyc.leaseontheblock.care' variant='outlined' color='primary'>View the Demo</Button>
          </Grid>
        </Grid>
        <br/>
        <br/>
      </div>
    </ThemeProvider>
  </Layout>
)

export default Platform
