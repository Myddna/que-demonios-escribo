import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "fixed",
      left: 0,
      top: 0,
      width: `100%`,
      backgroundColor: `#000000c7`,
      marginBottom: `1.45rem`,
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div
      className="left"
      style={{
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 200, fontSize: "1rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      className="right"
      style={{
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <Link
        to="/que-es-esto"
        style={{
          color: "white",
        }}
      >
        ¿Qué es esto?
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
