import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout.js"
import Masonry from "../utils/masonry"
import styled from "styled-components"
import SEO from "../components/seo"

// import Item from "../utils/masonryStyle"

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

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  return (
    <Layout wrapperwidth="100%">
      <SEO title={`Tagged “${tag}”`} />
      <h2>{`Tagged “${tag}”`}</h2>
      <Masonry>
        {edges.map(({ node }) => {
          return (
            <Link to={node.fields.slug}>
              <Item key={node.fields.slug}>
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
      <br />
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid_noBase64
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`
