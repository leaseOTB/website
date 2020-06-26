import React from "react"
import { PageProps, Link } from "gatsby"

import { Typography, Grid, ThemeProvider, IconButton } from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Language from "./langaugeSelect"
import theme from "./theme"
import Platform from "../pages/platform"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Footer = () => {
  const intl = useIntl()
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: "4em",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.light,
          marginTop: "2em",
          padding: "1em 1em .5em 2em",
          borderRadius: "1em",
          boxShadow: `150px 10px ${theme.palette.primary.main}`,
        }}
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} sm={7}>
            <Grid container direction="row" justify="flex-start">
              <Link
                to="/platform"
                style={{
                  textDecoration: "none",
                  color: theme.palette.secondary.light,
                  marginRight: "2em",
                }}
              >
                <Typography variant="body1">
                  <FormattedMessage id="platformButton" />
                </Typography>
              </Link>
              <Link
                to="/team"
                style={{
                  textDecoration: "none",
                  color: theme.palette.secondary.light,
                  marginRight: "2em",
                }}
              >
                <Typography variant="body1">
                  <FormattedMessage id="teamButton" />
                </Typography>
              </Link>
              <Link
                to="/careers"
                style={{
                  textDecoration: "none",
                  color: theme.palette.secondary.light,
                  marginRight: "2em",
                }}
              >
                <Typography variant="body1">
                  <FormattedMessage id="careerButton" />
                </Typography>
              </Link>
              <Language />

            </Grid>
            <Typography variant="body2" color="primary">
              © {new Date().getFullYear()}{" "}
              <FormattedMessage id="copyrightText" />
            </Typography>


          </Grid>
          <FormattedMessage id="socialText" />
          <Grid item xs={12} sm={3}>
            <IconButton
              style={{ color: theme.palette.secondary.light }}
              target="__blank"
              href="https://twitter.com/LeaseOTB"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              style={{ color: theme.palette.secondary.light }}
              target="__blank"
              href="https://github.com/zachdt"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              style={{ color: theme.palette.secondary.light }}
              target="__blank"
              href="https://www.linkedin.com/company/43276219"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Footer
