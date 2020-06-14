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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAO0lEQVQoU2NkwA/+w6QZoQy4AJI+FDlkDoyNbAfIAJD4f3wKYYrAGgmZCFID1jBIFOILUbgbCYQ7AwMANv8RCL4FK5gAAAAASUVORK5CYII="
              alt="icon"
            />
          </a>
        </Li>
        <Li>
          <a
            href="http://steph.supply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store&nbsp;
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAO0lEQVQoU2NkwA/+w6QZoQy4AJI+FDlkDoyNbAfIAJD4f3wKYYrAGgmZCFID1jBIFOILUbgbCYQ7AwMANv8RCL4FK5gAAAAASUVORK5CYII="
              alt="icon"
            />
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
  margin: 0 1rem;
  padding: 6px;
  a {
    text-decoration: none;
    font-size: 2rem;
    color: black;
    transition: all 0.25s ease;
    &:hover {
      color: crimson;
    }
  }
  .active {
    color: crimson;
    text-decoration: underline;
  }
  img {
    width: 20px;
    height: 20px;
    image-rendering: pixelated;
  }
  @media (max-width: 800px) {
    margin: 0 6px 6px 0;
  }
`

export default Header
