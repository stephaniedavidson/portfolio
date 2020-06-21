import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import aura from "./aura.jpg"
import hog from "./my_hog_2019.jpg"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>About</h1>
        <p>
          <img src={aura} style={{ width: "300px" }} alt="aura" />
        </p>
        <p>
          Web focused graphic designer and motion generalist from Toronto living
          in New York.
        </p>
        <p>
          <em>
            <u>Currently</u>
          </em>
          : Bloomberg News, art directing/designing/coding Special Features.
        </p>
        <p>
          <em>
            <u>Previously</u>
          </em>
          : Businessweek, Bloomberg Video.
        </p>
        <p>
          <em>
            <u>Even more previously</u>
          </em>
          : Digital advertising art director (clients: TD Bank, Motorola, Coke,
          Microsoft, Weather Network, Mitsubishi, Intuit, Hersheys, SC Johnson,
          Robin Hood Flour, HP, Hong Kong Tourism Board, Hellmans, Export
          Development Canada, The Bay, Carrabas, Smuckers).
        </p>
        <a href="mailto:stephcdavidson@gmail.com">email</a> <br />
        <a
          href="https://twitter.com/stephcd"
          target="blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Art direction</li>
            <li>Illustration</li>
            <li>Design</li>
            <li>Motion graphics (After Effects, C4D, Maya)</li>
            <li>HTML/CSS/JS</li>
          </ul>
        </section>
        <section>
          <h2>My rig</h2>
          <ul>
            <li>Thermaltake Core P3 Snow Edition ATX</li>
            <li>AMD Ryzen 7 3700x</li>
            <li>Gigabyte X570 Aorus Ultra ATX AM4</li>
            <li>G.Skill Trident Z RGB 16GB x 4</li>
            <li>Asus GeForce RTX 2080 Ti</li>
            <li>Thermaltake Toughpower Grand RGB 850W PSU</li>
            <li>Samsung 970 Pro 512GB M.2 SSD</li>
            <li>Western Digital Caviar Black 500gb</li>
            <li>Aliexpress dust cover (purple)</li>
          </ul>
          <img src={hog} alt="my rendering hog" style={{ width: 300 }} />
        </section>
        <section>
          <h2>Cool links</h2>
          <ul>
            <li>
              <a href="https://scottgelber.com/">Scott Gelber</a>
            </li>
            <li>
              <a href="http://tracyma.com/">Tracy Ma</a>
            </li>
            <li>
              <a href="http://www.wilsoncameron.com/">Wilson Cameron</a>
            </li>
            <li>
              <a href="http://laurelschwulst.com/">Laurel Schwulst</a>
            </li>
            <li>
              <a href="https://jamespants.com/">James Pants</a>
            </li>
            <li>
              <a href="http://cdxs.ist/">CDXS</a>
            </li>
            <li>
              <a href="http://www.txtbooks.us/">TXTbooks</a>
            </li>
          </ul>
        </section>
        <p>I made this site with Gatsby and Netlify CMS.</p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
