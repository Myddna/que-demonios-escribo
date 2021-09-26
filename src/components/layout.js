/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "normalize.css"
import "../assets/css/layout.css"

const Layout = ({ children, className = "content-page" }) => {
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
    <>
      <StaticImage
        src="../assets/images/background-3.jpg"
        formats={["auto"]}
        alt="Autumn leaves"
        width={1920}
        height={1080}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
        }}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        className={className}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: `100vh`,
          display: `flex`,
          flexDirection: `column`,
          position: `relative`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: `100%`,
          backgroundColor: `#000000c7`,
          color: "white",
          textAlign: "center",
          padding: `0.5rem 0.3rem`,
        }}
      >
        © {new Date().getFullYear()}, Hecho con
        {` `}
        <a
          href="https://v4.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          Gatsby v4
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
