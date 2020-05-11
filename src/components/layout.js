import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    // const { location, title, children } = this.props
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    //if (location.pathname === rootPath)

    return (
      <Wrapper>
        <Header />
        <main>{children}</main>

        <Footer>© {new Date().getFullYear()} Steph Davidson</Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 1800px;
  background: grey;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
