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
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import AddIcon from "@material-ui/icons/Add"

import theme from "../components/theme"
import Zach from "../components/images/team/zach"
import Redwan from "../components/images/team/redwan"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Team = (props: PageProps) => {
  const intl = useIntl()
  return (
    <Layout page={props.path}>
      <ThemeProvider theme={theme}>
        <SEO title="Careers" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Typography
          variant="h2"
          color="secondary"
          style={{ cursor: "default" }}
        >
          <FormattedMessage id="teamTitle" />
        </Typography>
        <br />
        <br />
        <Typography
          variant="h4"
          color="secondary"
          style={{ cursor: "default" }}
        >
          <FormattedMessage id="teamSubTitle" />
        </Typography>
        <br />
        {/* FOUNDERS STARTS HERE */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={10}
        >
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  <Redwan />
                </Grid>
                <Grid item xs={5} container direction="column">
                  <IconButton
                    target="__blank"
                    href="https://twitter.com/RedoudouM"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    target="__blank"
                    href="https://github.com/Redoudou"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/redwanmeslem/"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="redwanName" />
              </Typography>
              <Typography variant="body1">
                <FormattedMessage id="redwanTitle" />
              </Typography>
            </div>
          </Grid>
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  <Zach />
                </Grid>
                <Grid item xs={5} container direction="column">
                  <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/zacharydavisthielemann/"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="zacharyName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="zacharyTitle" />
              </Typography>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography
          variant="h4"
          color="secondary"
          style={{ cursor: "default" }}
        >
          <FormattedMessage id="teamSubTitleTwo" />
        </Typography>

        {/* COMMUNITY STARTS HERE */}
        <br />
        <br />
        {/* Gael */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={10}
        >
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Redwan /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/RedoudouM"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    target="__blank"
                    href="https://github.com/Redoudou"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/gaelgundin/"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="gaelName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="gaelTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Jessica */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/jessicawanczyk/"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="jessicaName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="jessicaTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Hanzhao */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/hanzhao-yu-8b0492179/"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="hanzhaoName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="hanzhaoTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Louis */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/louis-pham-198737194/	"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="louisName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="louisTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Joshua */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/joshua-grossman17/	"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="joshuaName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="joshuaTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Nathline */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/nathline-caristil/	"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="nathlineName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="nathlineTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Apnav */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/apnavp	"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="apnavName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="apnavTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Valmiki */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/vctulsee/	"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="valmikiName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="valmikiTitle" />
              </Typography>
            </div>
          </Grid>
          {/* Tian-Yuan */}
          <Grid item xs={10} sm={6} md={5}>
            <div
              style={{
                background: theme.palette.secondary.main,
                borderRadius: "1em",
                padding: "1em .5em 1em 1em",
                color: theme.palette.secondary.light,
                boxShadow: `5px 10px ${theme.palette.primary.main}`,
              }}
            >
              <Grid container direction="row" spacing={5}>
                <Grid item xs={7}>
                  {/* <Zach /> */}
                </Grid>
                <Grid item xs={5} container direction="column">
                  {/* <IconButton
                    target="__blank"
                    href="https://twitter.com/_zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <TwitterIcon />
                    </IconButton>
                    <IconButton
                    target="__blank"
                    href="https://github.com/zachdt"
                    style={{ color: theme.palette.secondary.light }}
                    >
                    <GitHubIcon />
                  </IconButton> */}
                  <IconButton
                    target="__blank"
                    href="https://www.linkedin.com/in/tntyzhao/"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <hr />
              <Typography variant="h6">
                <FormattedMessage id="tianName" />
              </Typography>
              <Typography variant="body2">
                <FormattedMessage id="tianTitle" />
              </Typography>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
      </ThemeProvider>
    </Layout>
  )
}

export default Team
