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
} from "@material-ui/core"
import theme from "../components/theme"

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
        <Typography
          variant="h3"
          color="secondary"
          style={{ cursor: "default" }}
        >
          <FormattedMessage id="aboutButton" />
        </Typography>
        <br />

        <div>
          <Typography
            variant="h4"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="aboutOurStoryTitle" />
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="aboutOurStory" />
          </Typography>
          <br />
          <Typography
            variant="h4"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="aboutOurVisionTitle" />
          </Typography>
          <br />
          <Typography
            variant="body1"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="aboutOurVision" />
          </Typography>
        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default About
