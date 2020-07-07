import PropTypes from "prop-types"
import React from "react"
import IndexLogo from "./images/indexLogo"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Grid,
  Typography,
  ThemeProvider,
  IconButton,
  Container,
} from "@material-ui/core"
import theme from "./theme"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Splash = () => {
  const intl = useIntl()
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          padding: "0px",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "lg",
        }}
      >
        <Typography
          id="platform"
          variant="h2"
          color="secondary"
          style={{ cursor: "default" }}
        >
          <FormattedMessage id="homeTitle" />
        </Typography>
        <br />
        <div
          style={{
            flexDirection: "row",
          }}
        >
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
        </div>
      </Container>
    </ThemeProvider>
  )
}

Splash.propTypes = {
  page: PropTypes.string,
}

export default Splash
