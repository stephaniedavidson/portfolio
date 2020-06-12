import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import GlobalStyle from "../components/GlobalStyle"

const Layout = props => {
  // const { location, title, children } = this.props
  const { setFilter, children } = props
  // const rootPath = `${__PATH_PREFIX__}/`
  //if (location.pathname === rootPath)
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav />
      <main>{children}</main>

      <Footer>© {new Date().getFullYear()} Steph Davidson</Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 1800px;
  img,
  video {
    max-width: 100%;
  }
`

const Footer = styled.footer`
  font-size: 0.75rem;
`

export default Layout
