import React from "react"

import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { Typography, ThemeProvider } from "@material-ui/core"
import theme from "../components/theme"

const NotFoundPage = (props: PageProps) => {
  const intl = useIntl()
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <SEO title="404" />
        <br />
        <br />
        <br />
        <div
          style={{
            minHeight: "55vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="404Title" />
          </Typography>
          <br />
          <Typography
            variant="body"
            color="secondary"
            style={{ cursor: "default" }}
          >
            <FormattedMessage id="404Message" />
          </Typography>
        </div>
      </ThemeProvider>
    </Layout>
  )
}

export default NotFoundPage
