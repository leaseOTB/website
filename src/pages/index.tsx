import React from "react"
import { Link, PageProps } from "gatsby"

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
import JSONData from "../content/en/homePage.json"

const IndexPage = () => {
  return (
    <IndexLayout>
      <ThemeProvider theme={theme}>
        <div style={{ minHeight: "70vh" }}>
          <SEO title="Home" />
          <div style={{ padding: "2em", marginBottom: "-3em" }}>
            <Typography
              id="platform"
              variant="h3"
              color="secondary"
              style={{ cursor: "default" }}
            >
              {JSONData.indexPage.title}
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
                  {JSONData.indexPage.pOne}
                </Typography>
                <br />
                <br />
                <Typography variant="body1" color="secondary">
                  {JSONData.indexPage.pTwo}
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
                  {JSONData.indexPage.pThree}
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
