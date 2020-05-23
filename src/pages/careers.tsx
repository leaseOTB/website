// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {ThemeProvider, Grid, Typography, Button, Card, IconButton} from '@material-ui/core'
import theme from '../components/theme'

const Careers = (props: PageProps) => (
  <Layout>
    <ThemeProvider theme={theme}>
    <SEO title="Careers" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Typography variant='h2' color='secondary' style={{cursor: 'default'}}>Internship Program</Typography>


      <br/>
      <br/>     

      <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={3}>
        <Grid item xs={10} sm={4} md={4}>
          <div style={{
            background: theme.palette.secondary.main,
            borderRadius: '1em',
            padding: '1em .5em 1em 1em',
            color: theme.palette.secondary.light,
            boxShadow: `5px 10px ${theme.palette.primary.main}`,
          }}>
            <Typography variant='h6'>Product Manager</Typography>
            <br/>

            <Typography variant='body1'>June 1st - August 1st, 2020</Typography>
            <hr/>
            <Button target='__blank' style={{marginRight: '1em'}} href='https://www.linkedin.com/jobs/view/1846557699/' variant='text' color='primary'>Learn More</Button>
            
            <Button target='__blank' href='https://internship.leaseontheblock.care' variant='outlined' color='primary'>Apply</Button>
          </div>
        </Grid>
        <Grid item xs={10} sm={4} md={4}>
          <div style={{
            background: theme.palette.secondary.main,
            borderRadius: '1em',
            padding: '1em .5em 1em 1em',
            color: theme.palette.secondary.light,
            boxShadow: `5px 10px ${theme.palette.primary.main}`,
          }}>
            <Typography variant='h6'>Software Engineer - Blockchain Infrastructure</Typography>
            <br/>

            <Typography variant='body1'>June 1st - August 1st, 2020</Typography>
            <hr/>
            <Button target='__blank' style={{marginRight: '1em'}} href='https://www.linkedin.com/jobs/view/1846557671/' variant='text' color='primary'>Learn More</Button>
            
            <Button target='__blank' href='https://internship.leaseontheblock.care' variant='outlined' color='primary'>Apply</Button>
          </div>
        </Grid>
        <Grid item xs={10} sm={4} md={4}>
          <div style={{
            background: theme.palette.secondary.main,
            borderRadius: '1em',
            padding: '1em .5em 1em 1em',
            color: theme.palette.secondary.light,
            boxShadow: `5px 10px ${theme.palette.primary.main}`,
          }}>
            <Typography variant='h6'>Software Engineer - Full Stack</Typography>
            <br/>

            <Typography variant='body1'>June 1st - August 1st, 2020</Typography>
            <hr/>

            <Button target='__blank' style={{marginRight: '1em'}} href='https://www.linkedin.com/jobs/view/1846557677/' variant='text' color='primary'>Learn More</Button>
            
            <Button target='__blank' href='https://internship.leaseontheblock.care' variant='outlined' color='primary'>Apply</Button>
          </div>
        </Grid>
      </Grid>
      <br/>
    </ThemeProvider>
  </Layout>
)

export default Careers
