import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "./logo.gif"

function Header() {
  return (
    <Nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Home" style={{ display: "block" }} />
      </Link>
      <Ul>
        <Li>
          <Link to="/tagged/illustration" activeClassName="active">
            Illustration
          </Link>
        </Li>
        <Li>
          <Link to="/tagged/design" activeClassName="active">
            Design & development
          </Link>
        </Li>
        <Li>
          <Link to="/tagged/motion">Motion</Link>
        </Li>
        <Li>
          <a
            href="http://bloombergcyber.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art direction↗
          </a>
        </Li>
        <Li>
          <a
            href="http://steph.supply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store↗
          </a>
        </Li>
        <Li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  .logo {
    flex: 0 0 500px;
    @media (max-width: 1000px) {
      flex-basis: 450px;
    }
    @media (max-width: 900px) {
      flex-basis: 400px;
    }
  }
  @media (max-width: 800px) {
    display: block;
  }
`
const Ul = styled.ul`
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 0 0 0 1rem;
  @media (max-width: 800px) {
    padding: 0;
  }
`
const Li = styled.li`
  display: inline-block;
  margin: 0.25rem;
  padding: 6px;
  @media (max-width: 800px) {
    margin: 0.2rem 0.2rem 0.2rem 0;
  }
  a {
    border: 2px solid black;
    border-radius: 20px;
    padding: 2px 14px;
    text-decoration: none;
    font-size: 1.8rem;
    color: black !important;
    transition: all 0.25s ease;
    white-space: nowrap;
    &:hover {
      color: crimson !important;
      border: 2px solid crimson !important;
    }
    @media (max-width: 1810px) {
      font-size: 1.6rem;
    }
    @media (max-width: 1706px) {
      font-size: 2.1rem;
      border-radius: 30px;
    }
    @media (max-width: 1300px) {
      font-size: 2.7rem;
    }
    @media (max-width: 1200px) {
      font-size: 3rem;
      border-radius: 27px;
    }
    @media (max-width: 1135px) {
      font-size: 2.4rem;
    }
    @media (max-width: 1050px) {
      font-size: 2.1rem;
    }
    @media (max-width: 920px) {
      font-size: 1.8rem;
    }
    @media (max-width: 735px) {
      font-size: 1.3rem;
    }
  }
  .active {
    color: crimson !important;
    border: 2px solid crimson !important;
  }
`

export default Header
