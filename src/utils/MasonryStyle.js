import styled from "styled-components"

export const Item = styled.div`
  transition: 0.2s;
  justify-content: center;
  align-content: center;
  display: grid;
  cursor: pointer;
  position: relative;
  .gatsby-image-wrapper > div[aria-hidden="true"] {
    display: none;
  }
  img,
  video {
    max-width: 100%;
    display: block;
    position: relative;
    z-index: 0;
  }
  h3 {
    opacity: 0;
    font-weight: normal;
    text-align: center;
    width: 90%;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    transition: all 0.3s ease;
    z-index: 1;
  }

  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.05);
    h3 {
      opacity: 1;
    }
  }
`
