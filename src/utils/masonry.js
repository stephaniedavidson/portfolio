import React, { useEffect, useRef, useState } from "react"
import useEventListener from "./useEventListener"
import styled from "styled-components"

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

const MasonryDiv = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`

const Col = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export default function Masonry({ children, gap, minWidth = 700, ...rest }) {
  const ref = useRef()
  const [numCols, setNumCols] = useState(2)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  const resizeHandler = () =>
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth)) //set width here
  useEffect(resizeHandler, [])
  useEventListener(`resize`, resizeHandler)

  return (
    <MasonryDiv ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  )
}
