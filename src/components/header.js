import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "./logo.gif"
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples

function Header(props) {
  return (
    <Nav>
      <img
        src={logo}
        alt="Home"
        style={block}
        onClick={() => props.setFilter("all")}
      />
      <Ul>
        <Li>
          <button
            onClick={() => props.setFilter("illustration")}
            style={linkStyle}
          >
            Illustration
          </button>
        </Li>
        <Li>
          <button onClick={() => props.setFilter("design")} style={linkStyle}>
            Design and programming
          </button>
        </Li>
        <Li>
          <button onClick={() => props.setFilter("motion")} style={linkStyle}>
            Motion
          </button>
        </Li>
        <Li>
          <a
            href="http://bloombergcyber.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
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
            style={linkStyle}
          >
            Store
          </a>
        </Li>
        <Li>
          <Link to="/about" style={linkStyle}>
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
`
const block = {
  display: "block",
}

const linkStyle = {
  textDecoration: "none",
  color: "black",
  background: "white",
  border: "none",
  fontSize: "1rem",
  fontFamily: "Times New Roman",
}

export default Header
