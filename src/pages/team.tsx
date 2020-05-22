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

const Team = (props: PageProps) => (
  <Layout page={props.path}>
    <ThemeProvider theme={theme}>
      <SEO title="Careers" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Typography variant='h2' color='secondary' style={{cursor: 'default'}}>Team</Typography>
      <br/>
      <br/>     
      <br/>
      <Grid container direction='row' justify='flex-start' alignItems='center' 
        spacing={10}
      >
        <Grid item xs={10} sm={6} md={5}>
          <div style={{
            background: theme.palette.secondary.main,
            borderRadius: '1em',
            padding: '1em .5em 1em 1em',
            color: theme.palette.secondary.light,
            boxShadow: `5px 10px ${theme.palette.primary.main}`,
          }}>
            <Grid container direction='row' spacing={5}>
              <Grid item xs={7}>
                <Redwan/>
              </Grid>
              <Grid item xs={5} container direction='column'>
                <IconButton href='https://twitter.com/RedoudouM' style={{color: theme.palette.secondary.light}} >
                  <TwitterIcon/>
                </IconButton>
                <IconButton href='https://github.com/Redoudou' style={{color: theme.palette.secondary.light}} >
                  <GitHubIcon />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/redwanmeslem/' style={{color: theme.palette.secondary.light}} >
                  <LinkedInIcon/>
                </IconButton>
              </Grid>
              
            </Grid>
            <hr/>
            <Typography variant='h6'>Redwan Meslem</Typography>
            <Typography variant='body1'>Founder & CEO</Typography>

          </div>
        </Grid>
        <Grid item xs={10} sm={6} md={5}>
          <div style={{
            background: theme.palette.secondary.main,
            borderRadius: '1em',
            padding: '1em .5em 1em 1em',
            color: theme.palette.secondary.light,
            boxShadow: `5px 10px ${theme.palette.primary.main}`,
          }}>
            <Grid container direction='row' spacing={5}>
              <Grid item xs={7}>
                <Zach/>
              </Grid>
              <Grid item xs={5} container direction='column'>
                <IconButton href='https://twitter.com/_zachdt' style={{color: theme.palette.secondary.light}} >
                  <TwitterIcon/>
                </IconButton>
                <IconButton href='https://github.com/zachdt' style={{color: theme.palette.secondary.light}} >
                  <GitHubIcon />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/zacharydavisthielemann/' style={{color: theme.palette.secondary.light}} >
                  <LinkedInIcon/>
                </IconButton>
              </Grid>
              
            </Grid>
            <hr/>
            <Typography variant='h6' >Zachary Thielemann</Typography>
            <Typography variant='body2'>Co-Founder & CTO</Typography>
          </div>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>     
      <br/>
    </ThemeProvider>
  </Layout>
)

export default Team
