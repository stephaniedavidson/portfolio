import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masonry from "../utils/masonry"
import styled from "styled-components"

const Item = styled.div`
  transition: 0.2s;
  justify-content: center;
  align-content: center;
  display: grid;
  cursor: pointer;
  position: relative;
  .gatsby-image-wrapper > div[aria-hidden="true"] {
    display: none;
  }
  img,
  video {
    max-width: 100%;
    display: block;
    position: relative;
    z-index: 0;
  }
  h3 {
    opacity: 0;
    font-weight: normal;
    text-align: center;
    width: 90%;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    transition: all 0.3s ease;
    z-index: 1;
    padding: 1rem;
  }

  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.05);
    h3 {
      opacity: 1;
    }
  }
`

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle} wrapperwidth="100%">
      <SEO title="Portfolio" />
      <Masonry minWidth={700}>
        {posts.map(({ node }) => {
          return (
            <Link to={`${node.fields.slug}`} key={node.fields.slug}>
              <Item>
                <h3>{node.frontmatter.title}</h3>
                {node.frontmatter.cover.extension === "jpg" && (
                  <Img
                    fluid={node.frontmatter.cover.childImageSharp.fluid}
                    imgStyle={{ position: "static" }}
                    alt={node.frontmatter.title}
                  />
                )}
                {node.frontmatter.cover.extension === "gif" && (
                  <img
                    src={node.frontmatter.cover.publicURL}
                    alt={node.frontmatter.title}
                  />
                )}
                {node.frontmatter.cover.extension === "mp4" && (
                  <video
                    width="100%"
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload="none"
                    src={node.frontmatter.cover.publicURL}
                  />
                )}
              </Item>
            </Link>
          )
        })}
      </Masonry>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            cover {
              extension
              publicURL
              childImageSharp {
                fluid(maxWidth: 900) {
                  aspectRatio
                  ...GatsbyImageSharpFluid_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
