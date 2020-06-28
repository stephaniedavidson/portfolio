import { createGlobalStyle } from "styled-components"
import InterRegular from "./Inter-Regular.woff"
import InterItalic from "./Inter-Italic.woff"
import InterBold from "./Inter-Bold.woff"
import InterBoldItalic from "./Inter-BoldItalic.woff"

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'InterRegular';
      src: local('InterRegular'),
      url(${InterRegular}) format('woff');
      font-weight: 300;
      font-style: normal;
  }
  @font-face {
      font-family: 'InterBold';
      src: local('InterBold'),
      url(${InterBold}) format('woff');
      font-weight: 700;
      font-style: bold;
  }
  @font-face {
      font-family: 'InterItalic';
      src: local('InterItalic'),
      url(${InterItalic}) format('woff');
      font-weight: 300;
      font-style: italic;
  }
  @font-face {
      font-family: 'InterBoldItalic';
      src: local('InterBoldItalic'),
      url(${InterBoldItalic}) format('woff');
      font-weight: 700;
      font-style: normal;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-family: InterRegular, 'Helvetica', sans-serif;
  }
  strong{
    font-family: InterBold;
  }
  em{
    font-family: InterItalic;
  }
  strong em{
    font-family: InterBoldItalic;
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
