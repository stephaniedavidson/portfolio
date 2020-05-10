import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"
import logo from "./logo.gif"

function Nav() {
  return (
    <StaticQuery
      query={navQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <img src={logo} alt="Steph Davidson portfolio" />
            <p>
              <strong>{author}</strong>
              <a href={`https://twitter.com/${social.twitter}`}>twitter</a>
            </p>
          </Container>
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

const Container = styled.div`
  display: flex;
`

export default Nav
