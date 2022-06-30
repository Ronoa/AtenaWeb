import React from 'react'

import { useTime } from 'react-timer-hook'

export default function Timer() {
  const { seconds, minutes, hours, ampm } = useTime({ format: '12-hour' })

  return (
    <div style={{ fontSize: '16px', textAlign: 'center', marginBottom: 10 }}>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      <span>{ampm}</span>
    </div>
  )
}
