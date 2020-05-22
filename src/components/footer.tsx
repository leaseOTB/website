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
        minHeight: '10em', 
        backgroundColor: theme.palette.secondary.main, 
        color: theme.palette.secondary.light,
        padding: '3em',
        boxShadow: `5px 10px ${theme.palette.primary.main}`,
      }}>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1'>
              © {new Date().getFullYear()}, Lease on the Block, LLC
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <IconButton style={{color: theme.palette.secondary.light}} href='https://twitter.com'>
              <TwitterIcon/>
            </IconButton>
            <IconButton style={{color: theme.palette.secondary.light}} href='https://github.com/zachdt'>
              <GitHubIcon/>
            </IconButton>
            <IconButton style={{color: theme.palette.secondary.light}} href='https://twitter.com'>
              <LinkedInIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>

  )
}

export default Footer