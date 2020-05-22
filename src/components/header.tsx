import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from './headerLogo'
import IndexLogo from './indexLogo'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { Grid, Typography, ThemeProvider, IconButton } from '@material-ui/core';
import theme from './theme'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const Header = (page: any) => {

  console.log(page)
  if (page !== '/') {
    return (
      <header
        style={{
          background: '#E86D48',
          minHeight: '100vh',
        }}
      >
        <Grid container style={{minHeight: '100vh'}} direction='column' justify='space-around' alignItems='center'>
          <Grid item>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <IndexLogo/>
            </Link>
          </Grid>
          <Grid item>
            <div
              onClick={() => scrollTo('#index1')}
              style={{
                color: '#250A3C',
                textDecoration: `none`,
              }}
            >
              <ArrowDownwardIcon style={{fontSize: '6em'}} />
            </div>
          </Grid>
        </Grid>
      </header>
    )
  } else {
    return (
      <header
      style={{
        background: '#E86D48',
        marginBottom: `1.45rem`,
      }}
       >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <HeaderLogo width='8em'/>
          </Link>
          </h1>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  page: PropTypes.string,
}


export default Header
