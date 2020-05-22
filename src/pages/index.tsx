import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import IndexImage from "../components/indexImage"
import SEO from "../components/seo"
import theme from '../components/theme'
import {ThemeProvider, Grid, Typography, Button, Card} from '@material-ui/core'

const IndexPage = (props: PageProps) => {
  return (
    <Layout page={props.path}>
      <ThemeProvider theme={theme}>
        <SEO title="Home" />
        <Grid id='index1' container justify='flex-start' alignItems='center'>
          <Grid item>
            <Card style={{padding: '3em', color: theme.palette.primary.main}}>
              Blockchain Technology for NYC
            </Card>
          </Grid>
        </Grid>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <IndexImage />
        </div>
        <Link to="/careers/">Go to page 2</Link>
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage
