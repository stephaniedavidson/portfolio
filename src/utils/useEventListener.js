import { useEffect, useRef } from "react"

export default function useEventListener(eventName, handler, element = window) {
  //a reff that stores handler
  const savedHandler = useRef()

  //update ref.current value if handler changes
  // this allows our effect below to always get latest handler
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    //element must supports addEventListener
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    //create event listener to calls handler function stored in ref
    const eventListener = event => savedHandler.current(event)

    //add event listener
    element.addEventListener(eventName, eventListener)
    // remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
