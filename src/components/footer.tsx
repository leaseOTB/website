import React from 'react'
import { PageProps, Link} from 'gatsby'

import { Typography, Grid, ThemeProvider, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import theme from './theme'

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{
        minHeight: '4em', 
        backgroundColor: theme.palette.secondary.main, 
        color: theme.palette.secondary.light,
        marginTop: '2em',
        padding: '1em 1em 1em 2em',
        borderRadius: '1em',
        boxShadow: `150px 10px ${theme.palette.primary.main}`,
      }}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} sm={7}>
            <Typography variant='body1'>
              © {new Date().getFullYear()} Lease on the Block
            </Typography>
          </Grid>
          Follow us!
          <Grid item xs={12} sm={3}>
            <IconButton style={{color: theme.palette.secondary.light}} href='https://twitter.com/LeaseOTB'>
              <TwitterIcon/>
            </IconButton>
            <IconButton style={{color: theme.palette.secondary.light}} href='https://github.com/zachdt'>
              <GitHubIcon/>
            </IconButton>
            <IconButton style={{color: theme.palette.secondary.light}} href='https://www.linkedin.com/company/43276219'>
              <LinkedInIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>

  )
}

export default Footer