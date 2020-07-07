// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"

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
        <div>
          <Typography
            variant="h2"
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
            <Grid item xs={12} sm={11}>
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
            <Grid item xs={12} sm={11}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ cursor: "default" }}
              >
                <FormattedMessage id="aboutOurVisionTitle" />
              </Typography>
              <br />
              <hr />
            </Grid>

            <Grid item xs={12} sm={11}>
              <Typography
                variant="body1"
                color="secondary"
                style={{ cursor: "default" }}
              >
                <FormattedMessage id="aboutOurVision" />
              </Typography>
            </Grid>
          </Grid>

          <br />
          <br />

          <br />
          <br />
          <br />
        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default About
