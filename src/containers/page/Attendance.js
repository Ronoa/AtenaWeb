import React from 'react'

import ContentSectionBody from 'components/section_page/contentSectionBody'
import TitleSection from 'components/section_page/titleSection'


import OptionsAttendance from 'components/Attendance/OptionsAttendance'
import TableAttendance from 'components/Attendance/TableAttendance'

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
        sectionRender={<TableAttendance />}
      />
    </div>
  )
}
