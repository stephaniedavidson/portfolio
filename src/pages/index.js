import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Masonry from "../utils/masonry"

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const [filter, setFilter] = useState("all")
  function filterTags(val) {
    setFilter(val)
  }

  return (
    <Layout
      filter={filter}
      setFilter={filterTags}
      location={props.location}
      title={siteTitle}
    >
      <SEO title="All posts" />
      <Masonry>
        {posts.map(({ node }, i) => {
          return node.frontmatter.tags.includes(filter) || filter === "all" ? (
            <Item key={node.fields.slug} data-tags={node.frontmatter.tags}>
              <Link to={`${node.fields.slug}`}>
                <h3>{node.frontmatter.title}</h3>

                {node.frontmatter.cover.extension === "jpg" && (
                  <Img
                    fluid={node.frontmatter.cover.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    alt={node.frontmatter.title}
                  />
                  // <img src={node.frontmatter.cover.publicURL} />
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
                {node.frontmatter.tags.map(x => {
                  return x + ` `
                })}
              </Link>
            </Item>
          ) : null
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
          excerpt
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
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  cursor: pointer;
  position: relative;
  &:hover h3 {
    opacity: 1;
  }
  img,
  video {
    width: 100%;
  }
  .gatsby-image-wrapper {
    position: static !important;
    min-height: 320px !important;
  }
  h3 {
    transition: all 0.3s ease;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    z-index: 2;
    padding: 10px;
    opacity: 0;
  }
`
