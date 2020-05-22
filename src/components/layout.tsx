/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './footer'
import "./layout.css"
import theme from './theme'
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Layout = ({ children }, page: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
   
  return (
    <div style={{background: '#CFEBEC'}}>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={500}
        EasingType='easeOutCubic'
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
        AnimationDuration={200}
        style={{color: '#E86D48', background: 'none', cursor: 'grab', textDecoration: 'none', marginTop: '5em'}}
      >
        <KeyboardArrowUpIcon style={{fontSize: '3em'}}/>
      </ScrollUpButton>
      <Header page={page}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
}

export default Layout
