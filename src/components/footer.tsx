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
          backgroundColor: theme.palette.secondary.white,
          color: theme.palette.secondary.main,
          width: "100%",
          minHeight: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid rgb(150,150,150)",
        }}
      >
        <div
          style={{
            width: "80%",
            padding: "1em 3em 1em 3em",
            minHeight: "4em",
          }}
        >
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} sm={7}>
              <Grid container direction="row" justify="flex-start">
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                    marginRight: "2em",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Gilroy Ultra Light",
                      fontWeight: "bolder",
                    }}
                  >
                    <FormattedMessage id="aboutButton" />
                  </Typography>
                </Link>
                <Link
                  to="/platform"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                    marginRight: "2em",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Gilroy Ultra Light",
                      fontWeight: "bolder",
                    }}
                  >
                    <FormattedMessage id="platformButton" />
                  </Typography>
                </Link>
                <Link
                  to="/team"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                    marginRight: "2em",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Gilroy Ultra Light",
                      fontWeight: "bolder",
                    }}
                  >
                    <FormattedMessage id="teamButton" />
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={11}>
                <Language />
              </Grid>
              <Typography
                variant="body2"
                color="secondary"
                style={{
                  cursor: `default`,
                  fontFamily: "Gilroy Ultra Light",
                  fontWeight: "bolder",
                }}
              >
                © {new Date().getFullYear()}{" "}
                <FormattedMessage id="copyrightText" />
              </Typography>
            </Grid>
            <Typography
              variant="body1"
              style={{
                fontFamily: "Gilroy Ultra Light",
                fontWeight: "bolder",
              }}
            >
              <FormattedMessage id="socialText" />
            </Typography>
            {/* SOCIAL MEDIA LINKS */}
            <Grid item xs={12} sm={3}>
              <IconButton
                style={{ color: theme.palette.primary.main }}
                target="__blank"
                href="https://twitter.com/LeaseOTB"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                style={{ color: theme.palette.primary.main }}
                target="__blank"
                href="https://github.com/leaseOTB"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                style={{ color: theme.palette.primary.main }}
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
