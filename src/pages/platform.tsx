// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {ThemeProvider, Grid, Typography, Button, Card, IconButton} from '@material-ui/core'
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
      <div style={{padding: '3em'}}>
      <Typography id='platform' variant='h2' color='secondary' style={{cursor: 'default'}}>Platform</Typography>
      <br/>
      <br/>
        <Grid container direction='row' justify='space-between' alignItems='center' spacing={0} >
          <Grid item xs={12} sm={5} >
            <hr/>
            <Typography variant='body1' color='secondary'>Private Ethereum networks for lease management in rent-controlled properties.</Typography>  
            <br/> 
            <Typography variant='body1' color='secondary'>Role tokens establish idenity, smart contracts create, store, and modify lease and property documents.</Typography>  
          </Grid>
          <Grid item xs={12} sm={5}>
            <PlatformETH />
          </Grid>
          <Grid item xs={12}>
            <div  onClick={() => scrollTo('#demo')} style={{ cursor: 'grab', float: 'none', margin: '5em auto'}}>
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
        </Grid>
        <br/>
        <br id='demo'/>
        <br/>

        <hr/>
        <br/>
        <br/>
        <Typography  variant='h3' color='secondary' style={{cursor: 'default'}}>New York City Demo</Typography>
        <br/>
        <br/>
        <br/>
        <Grid container direction='row' justify='space-between' alignItems='center' spacing={0} >
          <Grid item xs={12} sm={5}>
                <PlatformLogo />
            </Grid>
          <Grid item xs={12} sm={5} >
           
            <hr/>
            <Typography variant='body1' color='secondary'>Our NYC demo was awarded 1st place in the Sustianable Cities Catagory of the 2020 BSIC Hackathon.</Typography>  
            <br/> 
            <Button href='https://nyc.leaseontheblock.care' variant='outlined' color='primary'>View the Demo</Button>
          </Grid>
          <Grid item xs={12}>
            <div  onClick={() => scrollTo('#intro')} style={{ cursor: 'grab', float: 'none', margin: '0 auto', paddingTop: '3em'}}>
              <div
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: `none`,
                  cursor: 'pointer',
                }}
              >
                <KeyboardArrowUpIcon style={{fontSize: '6em'}} />
              </div>  
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  </Layout>
)

export default Platform
