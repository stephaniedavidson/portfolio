import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "./logo.gif"

function Header(props) {
  return (
    <Nav>
      <Link to="/">
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
            Design and programming
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
            Art direction
          </a>
        </Li>
      </Ul>
      <Ul>
        <Li>
          <a
            href="http://steph.supply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </a>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
      </Ul>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
`
const Li = styled.li`
  display: inline-block;
  border: 2px solid black;
  padding: 3px 6px;
  margin: 0 0 0 6px;
  transition: all 0.25s ease;
  &:hover {
    background: tomato;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
  .active {
    background: tomato;
  }
`

export default Header
