import React from 'react'
import GradeItem from 'components/Teacher/GradeItem'

export default function OptionsAttendanceReport({ changeDateSelect }) {
  return (
    <div>
      <GradeItem
        isButtonDelete={false}
        isReport={true}
        changeDateSelect={changeDateSelect}
      />
    </div>
  )
}
