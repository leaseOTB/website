import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import IndexImage from "../components/images/indexImage"
import IndexImage1 from "../components/images/indexImage1"

import SEO from "../components/seo"
import theme from "../components/theme"
import {
  ThemeProvider,
  Grid,
  Hidden,
  Typography,
  Button,
  Card,
} from "@material-ui/core"
import IndexLayout from "../components/IndexLayout"
import Header from "../components/header"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <IndexLayout>
      <ThemeProvider theme={theme}>
        <div style={{ minHeight: "70vh" }}>
          <SEO title={intl.formatMessage({ id: "Home" })} />
          <div style={{ padding: "2em", marginBottom: "-3em" }}>
            <Typography
              id="platform"
              variant="h3"
              color="secondary"
              style={{ cursor: "default" }}
            >
              <FormattedMessage id="homeTitle" />
            </Typography>
            <br />
            <br />
            <br />

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" color="secondary">
                  <FormattedMessage id="homeOne" />
                </Typography>
                <br />
                <br />
                <Typography variant="body1" color="secondary">
                  <FormattedMessage id="homeTwo" />
                </Typography>
              </Grid>
              <Hidden smDown>
                <Grid item xs={12} sm={6}>
                  <IndexImage />
                </Grid>
              </Hidden>
            </Grid>
            <br />
            <br />

            <br />

            <br />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <IndexImage1 />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="secondary">
                  <FormattedMessage id="homeThree" />
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
    </IndexLayout>
  )
}

export default IndexPage
