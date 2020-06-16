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
import JSONData from "../content/en/platformPage.json"

const Platform = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <SEO title="Platform" />
      <br id="intro" />
      <br />
      <br />
      <br />

      <br />
      <div style={{ padding: "2em" }}>
        <Typography
          id="platform"
          variant="h2"
          color="secondary"
          style={{ cursor: "default" }}
        >
          {JSONData.platformPage.title}
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
            <hr />
            <Typography variant="body1" color="secondary">
              {JSONData.platformPage.pOne}
            </Typography>
            <br />
            <Typography variant="body1" color="secondary">
              {JSONData.platformPage.pTwo}
            </Typography>
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
        <br id="demo" />
        <br />
        <br />
        <br />
        <Typography
          variant="h4"
          color="secondary"
          style={{ cursor: "default" }}
        >
          {JSONData.platformPage.titleTwo}
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
            <hr />
            <Typography variant="body1" color="secondary">
              {JSONData.platformPage.pThree}
            </Typography>
            <br />
            <Button
              href="https://nyc.leaseontheblock.care"
              variant="outlined"
              color="primary"
            >
              {JSONData.platformPage.bottomButton}
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    </ThemeProvider>
  </Layout>
)

export default Platform
