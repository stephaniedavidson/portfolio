import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masonry from "../utils/masonry"
import Item from "../utils/MasonryStyle"

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Masonry>
        {posts.map(({ node }) => {
          return (
            <Item key={node.fields.slug}>
              <Link to={`${node.fields.slug}`}>
                <h3>{node.frontmatter.title}</h3>

                {node.frontmatter.cover.extension === "jpg" && (
                  <Img
                    fluid={node.frontmatter.cover.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
                    alt={node.frontmatter.title}
                  />
                )}
                {node.frontmatter.cover.extens0ion === "gif" && (
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
              </Link>
            </Item>
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
