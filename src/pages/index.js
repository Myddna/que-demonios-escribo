import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import RandomQuote from "../components/randomQuote"

const IndexPage = () => (
  <Layout className="index-page">
    <Seo title="QDE" />
    <div className="quote-container">
      <RandomQuote />
    </div>
  </Layout>
)

export default IndexPage
