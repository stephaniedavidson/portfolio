import React from "react"
import styled from "styled-components"
import Nav from "./nav"
import GlobalStyle from "../utils/GlobalStyle"

const Layout = props => {
  // const { location, title, children } = this.props
  const { children } = props
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
  /* max-width: ${props => props.wrapperwidth || `1800px`}; */
  padding: 1rem;
  font-size: 1.25rem;
  img,
  video {
    max-width: 100%;
  }
`

const Footer = styled.footer`
  font-size: 0.8rem;
  margin: 1rem 0 0.5rem 0;
`

export default Layout
