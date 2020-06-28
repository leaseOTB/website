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
  IconButton,
  Hidden,
} from "@material-ui/core"
import theme from "../components/theme"
import PlatformLogo from "../components/images/platformLogo.js"
import Web3 from "../components/images/web3.js"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const About = (props: PageProps) => {
  const intl = useIntl()
  return (
    <Layout page={props.path}>
      <ThemeProvider theme={theme}>
        <SEO title="About Us" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Typography
            variant="h3"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="aboutButton" />
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
              <Typography
                variant="h4"
                color="secondary"
                style={{ cursor: "default" }}
              >
                <FormattedMessage id="aboutOurStoryTitle" />
              </Typography>
              <br />
              <hr />
              <Typography
                variant="body1"
                color="secondary"
                style={{ cursor: "default" }}
              >
                <FormattedMessage id="aboutOurStory" />
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={6}>
                <Web3 />
              </Grid>
            </Hidden>
          </Grid>
          <br />
          <br />

          <Typography
            variant="h4"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="aboutOurVisionTitle" />
          </Typography>
          <br />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} sm={6}>
              <hr />

              <Typography
                variant="body1"
                color="secondary"
                style={{ cursor: "default" }}
              >
                <FormattedMessage id="aboutOurVision" />
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={6}>
                <PlatformLogo />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default About