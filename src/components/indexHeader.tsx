import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./images/headerLogo"
import IndexLogo from "./images/indexLogo"
import scrollTo from "gatsby-plugin-smoothscroll"
import Wave from "react-wavify"
import "./layout.css"
import {
  Grid,
  AppBar,
  Typography,
  Hidden,
  Toolbar,
  ThemeProvider,
  IconButton,
  Button,
  Divider,
} from "@material-ui/core"
import theme from "./theme"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

function IndexHeader() {
  const intl = useIntl()
  return (
    <ThemeProvider theme={theme}>
      <header
        style={{
          background:
            "linear-gradient(0deg, rgba(232,109,72,1) 0%, rgba(37,10,60,1) 100%)",
          minHeight: "100vh",
        }}
      >
        <Grid
          container
          style={{
            minHeight: "100vh",
            paddingTop: "10em",
            padding: "3em",
            color: theme.palette.secondary.light,
          }}
          direction="column"
          justify="flex-end"
          alignItems="center"
          spacing={5}
        >
          <Grid item>
            <br />

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item sm={12} md={8}>
                <Link
                  to="/"
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: `none`,
                  }}
                >
                  <IndexLogo />
                </Link>
              </Grid>
              <Grid
                item
                sm={12}
                md={6}
                container
                direction="column-reverse"
                justify="center"
                alignItems="flex-start"
                spacing={3}
                style={{ marginTop: "-.7em" }}
              >
                <Grid item>
                  <br />
                  <hr />
                  <Typography variant="h6">
                    <FormattedMessage id="headerSubText" />
                  </Typography>
                  <br />
                </Grid>
                <Grid item container direction="row" spacing={6}>
                  <Grid item>
                    <Link
                      to="/about"
                      style={{
                        color: theme.palette.secondary.light,
                        textDecoration: `none`,
                      }}
                    >
                      <Button color="inherit" variant="outlined">
                        <FormattedMessage id="aboutButton" />
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/platform"
                      style={{
                        color: theme.palette.secondary.light,
                        textDecoration: `none`,
                      }}
                    >
                      <Button color="inherit" variant="outlined">
                        <FormattedMessage id="platformButton" />
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/team"
                      style={{
                        color: theme.palette.secondary.light,
                        textDecoration: `none`,
                      }}
                    >
                      <Button color="inherit" variant="outlined">
                        <FormattedMessage id="teamButton" />
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <hr />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden smDown>
              <div
                className="downArrow"
                onClick={() => scrollTo("#home")}
                style={{ cursor: "grab", float: "none", margin: "5em auto" }}
              >
                <div
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: `none`,
                    cursor: "pointer",
                  }}
                >
                  <KeyboardArrowDownIcon style={{ fontSize: "6em" }} />
                </div>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </header>
      <Wave
        id="home"
        fill={"white"}
        paused={false}
        options={{
          height: 30,
          amplitude: 10,
          speed: 0.05,
          points: 10,
        }}
        style={{
          cursor: "grab",
          marginTop: "-8em",
        }}
        onClick={() => scrollTo("#home")}
      ></Wave>
    </ThemeProvider>
  )
}

export default IndexHeader
