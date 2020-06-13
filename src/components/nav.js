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
            Art direction&nbsp;
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAO0lEQVQoU2NkwA/+w6QZoQy4AJI+FDlkDoyNbAfIAJD4f3wKYYrAGgmZCFID1jBIFOILUbgbCYQ7AwMANv8RCL4FK5gAAAAASUVORK5CYII=" />
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
            Store&nbsp;
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAO0lEQVQoU2NkwA/+w6QZoQy4AJI+FDlkDoyNbAfIAJD4f3wKYYrAGgmZCFID1jBIFOILUbgbCYQ7AwMANv8RCL4FK5gAAAAASUVORK5CYII=" />
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
  margin: 0 0 0 6px;
  padding: 6px;
  a {
    /* border: 2px solid black; */
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
    transition: all 0.25s ease;
    &:hover {
      color: crimson;
      /* border: 2px solid crimson; */
      /* background: lavenderblush; */
    }
  }
  .active {
    color: green;
    /* border: 2px solid green; */
  }
`

export default Header
