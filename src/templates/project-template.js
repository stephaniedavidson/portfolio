import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Body from "../utils/BodyStyle"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <Body>
          <Cover>
            {post.frontmatter.cover.extension === "jpg" && (
              <Img
                fluid={post.frontmatter.cover.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            )}
            {post.frontmatter.cover.extension === "mp4" && (
              <video
                width="100%"
                loop
                autoPlay
                muted
                playsInline
                preload="none"
                src={post.frontmatter.cover.publicURL}
              />
            )}
            {post.frontmatter.cover.extension === "gif" && (
              <img
                src={post.frontmatter.cover.publicURL}
                alt={post.frontmatter.title}
              />
            )}
          </Cover>
          <h1>
            {post.frontmatter.title}
            &nbsp;<sup>{post.frontmatter.date}</sup>
          </h1>

          <MDXRenderer>{post.body}</MDXRenderer>
        </Body>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "YYYY")
        cover {
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1800, quality: 95) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`

const Cover = styled.div`
  width: 100%;
  margin: 2rem 0;
`
