import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "./logo.gif"

function Header() {
  return (
    <StaticQuery
      query={navQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Nav>
            <Link to="./">
              <img src={logo} alt={author} />
            </Link>
            <p>
              <a href={`https://twitter.com/${social.twitter}`}>twitter</a>
            </p>
          </Nav>
        )
      }}
    />
  )
}

const navQuery = graphql`
  query navQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Nav = styled.div`
  display: flex;
  background: tomato;
`

export default Header
