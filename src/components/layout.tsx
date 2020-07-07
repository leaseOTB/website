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
import Footer from "./footer"
import "./layout.css"
import theme from "./theme"
import ScrollUpButton from "react-scroll-up-button" //Add this line Here
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const Layout = ({ children, path }) => {
  return (
    <div style={{ background: "white" }}>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={500}
        EasingType="easeOutCubic"
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
        AnimationDuration={200}
        style={{
          color: "#E86D48",
          background: "none",
          padding: "1em",
          borderRadius: "1em",
          cursor: "grab",
          textDecoration: "none",
          marginTop: "10em",
        }}
      >
        <KeyboardArrowUpIcon style={{ fontSize: "3em" }} />
      </ScrollUpButton>
      <Header />
      <br />
      <br />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
}

export default Layout
