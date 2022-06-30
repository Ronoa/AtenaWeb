import { useEffect, useRef, useState } from 'react'

const { NODE_ENV } = process.env

export const useComponentDidMount = (func) => useEffect(func, [])

export const useComponentWillMount = (func) => {
  const willMount = useRef(true)

  if (willMount.current && NODE_ENV === 'production') func()

  useComponentDidMount(() => {
    willMount.current = false
    if (NODE_ENV === 'development') func()
  })
}
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      // setDebouncedValue(null)
      clearTimeout(handler)
    }
  }, [delay, value])

  return debouncedValue
}
