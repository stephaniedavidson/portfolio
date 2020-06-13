import styled from "styled-components"

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  cursor: pointer;
  position: relative;
  &:hover h3 {
    opacity: 1;
  }
  img,
  video {
    width: 100%;
  }
  .gatsby-image-wrapper {
    position: static !important;
    min-height: 320px !important;
  }
  h3 {
    transition: all 0.3s ease;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    z-index: 2;
    padding: 10px;
    opacity: 0;
  }
`

export default Item
