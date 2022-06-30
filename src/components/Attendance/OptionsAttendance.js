import React from 'react'
import Timer from './Timer'
import GradeItem from 'components/Teacher/GradeItem'
export default function OptionsAttendance() {
  return (
    <div>
      <Timer />
      <GradeItem isButtonDelete={false} />
    </div>
  )
}
