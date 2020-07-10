import React from "react"
import { Typography, Grid, ThemeProvider, IconButton } from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Language from "./langaugeSelect"
import theme from "./theme"
import Platform from "../pages/platform"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { Footer } from "@leaseOTB/ui-components"

const FooterComponent = () => {
  const intl = useIntl()
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.light,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "80%",
            padding: "1em 3em 1em 3em",
            minHeight: "4em",
            // marginTop: "2em",
          }}
        >
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} sm={7}>
              <Grid container direction="row" justify="flex-start">
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.light,
                    marginRight: "2em",
                  }}
                >
                  <Typography variant="body1">
                    <FormattedMessage id="aboutButton" />
                  </Typography>
                </Link>
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
              </Grid>
              <Grid item xs={11}>
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
                href="https://github.com/leaseOTB"
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
      </div>
    </ThemeProvider>
  )
}

export default FooterComponent
