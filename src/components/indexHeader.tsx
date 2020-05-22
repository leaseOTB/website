import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from './images/headerLogo'
import IndexLogo from './images/indexLogo'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Wave from 'react-wavify'

import { Grid, AppBar, Typography, Hidden, Toolbar, ThemeProvider, IconButton, Button} from '@material-ui/core';
import theme from './theme'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const IndexHeader = ()=> {

  return (
    <ThemeProvider theme={theme}>
      <header
        style={{
          background: 'linear-gradient(0deg, rgba(232,109,72,1) 0%, rgba(37,10,60,1) 100%)',
          minHeight: '100vh',
          
        }}
      >
      <Grid container style={{minHeight: '100vh', padding: '3em', color: theme.palette.secondary.light}} direction='column' justify='flex-start' alignItems='center' spacing={9} >
          <Grid item>
            <br/>

            <Link
                to="/"
                style={{
                  color: theme.palette.secondary.light,
                  textDecoration: `none`,
                }}
              >
              <IndexLogo/>

            </Link>

          </Grid>        

          <Grid item container direction='column' justify='space-around' alignItems='center' spacing={3} >
            <Grid item>
              <Typography variant='body2'></Typography> 
            </Grid>
            <Grid item >
              <Link
                to="/platform"
                style={{
                  color: theme.palette.secondary.light,
                  textDecoration: `none`,
                }}
              >
                <Button color='inherit' variant='outlined'>Platform</Button>
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
                <Button color='inherit' variant='outlined'>Team</Button>
              </Link>
            </Grid>
            <hr/>

          </Grid>
          <Grid item>
            <Hidden smDown>
                <div  onClick={() => scrollTo('#index1')} style={{ cursor: 'grab', float: 'none', margin: '0 auto'}}>
                  <div
                    style={{
                      color: theme.palette.secondary.light,
                      textDecoration: `none`,
                      cursor: 'pointer',
                    }}
                  >
                    <KeyboardArrowDownIcon style={{fontSize: '6em'}} />
                  </div>  
                </div>
                          
            </Hidden>
          </Grid>
        </Grid>
        </header>
        <Wave fill={theme.palette.secondary.light} paused={false}
            options={{
              height: 30,
              amplitude: 30,
              speed: 0.1,
              points: 2
            }}
            style={{
              cursor: 'grab',
              marginTop: '-5em'
            }}
            onClick={() => scrollTo('#index1')}
        ></Wave>
    </ThemeProvider>
  )
}

export default IndexHeader