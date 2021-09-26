import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "../assets/css/random-quote.css"

const RandomQuote = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulQuote {
            nodes {
              quote {
                quote
              }
              author
            }
          }
        }
      `}
      render={data => {
        const {
          allContentfulQuote: { nodes: quotes },
        } = data
        const quotesNumber = quotes.length
        const quoteIndex = Math.floor(Math.random() * quotesNumber)
        const theQuote = quotes[quoteIndex]
        return (
          <div className="quote">
            <div className="text">{theQuote.quote.quote}</div>
            <div className="author">{theQuote.author}</div>
            <Link to="/" className="button button-get-quote">
              Dame otra
            </Link>
          </div>
        )
      }}
    />
  )
}

export default RandomQuote
