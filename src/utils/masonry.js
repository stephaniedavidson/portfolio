import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

// *************************************
// from https://codesandbox.io/s/captain-hookuseeventlistener-rtrkc
const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSupported = element && element.addEventListener
      if (!isSupported) return

      const eventListener = event => savedHandler.current(event)
      element.addEventListener(eventName, eventListener)

      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    }
  }, [eventName, element])
}
// *************************************

//from https://janosh.io/blog/react-hooks-masonry
const MasonryDiv = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`

const Col = styled.div`
  display: grid;
  grid-gap: 1rem;
  min-width: 360px;
`

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

export default function Masonry({ children, gap, minWidth = 500, ...rest }) {
  const ref = useRef()
  const [numCols, setNumCols] = useState(3)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  const resizeHandler = () =>
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth))
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
