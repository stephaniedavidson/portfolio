import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
// import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Masonry>
          {/* <div style={{ margin: "20px 0 40px" }}> */}
          {posts.map(({ node }) => {
            // const title = node.frontmatter.title || node.fields.slug
            return (
              <Item key={node.fields.slug}>
                <Link style={{ boxShadow: `none` }} to={`${node.fields.slug}`}>
                  <h3>{node.frontmatter.title}</h3>
                  {node.frontmatter.cover.extension === "mp4" ? (
                    <video
                      width="100%"
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="none"
                      src={node.frontmatter.cover.publicURL}
                    />
                  ) : (
                    <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
                  )}
                  <small>{node.frontmatter.date}</small>
                  {/* <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                /> */}
                </Link>
              </Item>
            )
          })}
          {/* </div> */}
        </Masonry>
      </Layout>
    )
  }
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
          }
        }
      }
    }
  }
`
const Masonry = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

const Item = styled.div`
  width: 50%;
  padding: 1rem;
  position: relative;
  img {
    width: 100%;
  }
  h3 {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    margin: 0;
  }
`
