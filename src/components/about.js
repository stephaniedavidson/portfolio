/*
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function About() {
  return (
    <StaticQuery
      query={aboutQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                minWidth: 50,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              <strong>{author}</strong>
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow her on Twitter
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const aboutQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/aura.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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

export default About
