// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ThemeProvider,
  Grid,
  Typography,
  Button,
  Card,
  Hidden,
  IconButton,
} from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import scrollTo from "gatsby-plugin-smoothscroll"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import theme from "../components/theme"
import PlatformETH from "../components/images/platformETH"
import PlatformToken from "../components/images/platformToken"
import PlatformLogo from "../components/images/platformLogo.js"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Platform = () => {
  const intl = useIntl()
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <SEO title="Platform" />
        <br />
        <br />
        <br />
        <div>
          <Typography
            variant="h2"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="platformTitle" />
          </Typography>
          <br />
          <br />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} sm={6}>
              <br />
              <Typography variant="body1" color="secondary">
                <FormattedMessage id="platformOne" />
              </Typography>
              <br />
              <Typography variant="body1" color="secondary"></Typography>
            </Grid>
            <Hidden xlUp>
              <Grid item xs={12} sm={6}></Grid>
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
          <br id="demo" />
          <br />
          <br />
          <hr />

          <br />
          <Typography
            variant="h4"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="platformTitleTwo" />
          </Typography>
          <br />
          <br />
          <br />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Hidden smDown>
              <Grid item xs={12} sm={6}>
                <PlatformLogo />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" color="secondary">
                <FormattedMessage id="platformThree" />
              </Typography>
              <br />
              <Button
                href="https://nyc.leaseontheblock.care"
                variant="outlined"
                color="primary"
              >
                <FormattedMessage id="platformBottomButton" />
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default Platform
