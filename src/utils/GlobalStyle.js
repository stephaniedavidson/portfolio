import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 100%;
  }
  *{
      box-sizing: border-box;
  }
  h1, h2, h3{
    font-weight: normal;
  }
  h1{font-size: 3.5rem}
  h2{font-size: 2.5rem}
  h3{font-size: 2rem}
  p{
    font-size: 1.4rem;
    line-height: 2rem;
  }
  li{margin-top: .5rem;}
  a{color:blue}
  a:visited{color:blue}
`

export default GlobalStyle
