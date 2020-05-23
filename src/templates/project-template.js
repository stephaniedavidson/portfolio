import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} />
        {post.frontmatter.cover.extension === "mp4" ? (
          <video
            width="100%"
            loop
            autoPlay
            muted
            playsInline
            preload="none"
            src={post.frontmatter.cover.publicURL}
          />
        ) : (
          <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        )}
        <h1>{post.frontmatter.title}</h1>
        <h2>the slug should appear here!! {post.frontmatter.slug}</h2>
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
