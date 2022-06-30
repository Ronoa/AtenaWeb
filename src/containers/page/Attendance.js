import React from 'react'

import ContentSectionBody from 'components/section_page/contentSectionBody'
import TitleSection from 'components/section_page/titleSection'
import TableTeacher from 'components/Teacher/TableTeachers'

import OptionsAttendance from 'components/Attendance/OptionsAttendance'

const titleBody = {
  title: 'Asistencia',
  description: <OptionsAttendance />,
  iscreated: false,
  titleButtonPrimary: 'Agregar Docente',
  pathButtonPrimary: '/teachers/create',
  pathButtonBack: '/teachers',
}

export default function Attendance() {
  return (
    <div>
      <ContentSectionBody
        sectionRender={<TitleSection infoSection={titleBody} />}
      />
      <ContentSectionBody
        isNonePadding={true}
        isSectionTransparent={true}
        sectionRender={<TableTeacher />}
      />
    </div>
  )
}
