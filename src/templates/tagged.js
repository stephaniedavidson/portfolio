import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout.js"
import Masonry from "../utils/masonry"
import Item from "../utils/MasonryStyle"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  return (
    <Layout>
      <h2>{`Tagged “${tag}”`}</h2>
      <Masonry>
        {edges.map(({ node }) => {
          // const { slug } = node.fields
          return (
            <Item key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
                {node.frontmatter.cover.extension === "jpg" && (
                  <Img
                    fluid={node.frontmatter.cover.childImageSharp.fluid}
                    imgStyle={{ objectFit: "contain" }}
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
              </Link>
            </Item>
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
