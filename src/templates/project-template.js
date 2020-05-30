import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        <Cover>
          {post.frontmatter.cover.extension === "jpg" && (
            <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
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
            <img src={post.frontmatter.cover.publicURL} />
          )}
        </Cover>
        <h1>{post.frontmatter.title}</h1>
        <h2>the slug should appear here --> {post.frontmatter.slug}</h2>
        <p>{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
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
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid_noBase64
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
