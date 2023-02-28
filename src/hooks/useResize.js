import { useCallback, useEffect, useState } from "react"

export const useResize = (myRef) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    
    const handleResize = useCallback(() => {
        setWidth(myRef.current.offsetWidth)
        setHeight(myRef.current.offsetHeight)
    }, [myRef])
  
    useEffect(() => {
      window.addEventListener('load', handleResize)
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('load', handleResize)
        window.removeEventListener('resize', handleResize)
      }
    }, [myRef, handleResize])
  
    return { width, height }
  }