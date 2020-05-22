import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from './images/headerLogo'
import IndexLogo from './images/indexLogo'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { Grid, AppBar, Typography, Toolbar, ThemeProvider, IconButton, Button, Tab, Tabs, withStyles} from '@material-ui/core';
import theme from './theme'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const Header = (page: any) => {
  return (
    <ThemeProvider theme={theme}>
        <AppBar color='secondary' position='fixed'>
          <Toolbar variant='dense'>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <HeaderLogo width='15em'/>
            </Link>
            <Grid item container direction='row' justify='flex-end' alignItems='center' spacing={4} >
              <Grid item>
                <Link
                  to="/platform"
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: `none`,
                  }}
                >
                  <Button color='inherit' variant='text'>Platform</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/team"
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: `none`,
                  }}
                >
                  <Button color='inherit' variant='text'>Team</Button>
                </Link>
              </Grid>
              
              <Grid item>
                <Link
                  to="/careers"
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: `none`,
                  }}
                >
                  <Button color='primary' variant='outlined'>Join</Button>
                </Link>
              </Grid>
              
            </Grid>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  )
}

Header.propTypes = {
  page: PropTypes.string,
}


export default Header
