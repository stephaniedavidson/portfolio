import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
// import PropTypes from "prop-types"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMdx
  return (
    <Layout>
      <h1>{`Tagged with “${tag}”`}</h1>
      <div>
        {edges.map(({ node }) => {
          console.log({ node })
          // const { slug } = node.fields
          return (
            <div key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <br />
              {node.frontmatter.cover.extension}
            </div>
          )
        })}
      </div>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}
// Tags.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired,
//   }),
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               title: PropTypes.string.isRequired,
//             }),
//             fields: PropTypes.shape({
//               slug: PropTypes.string.isRequired,
//             }),
//           }),
//         }).isRequired
//       ),
//     }),
//   }),
// }
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
