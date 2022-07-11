import React from 'react'

import ContentSectionBody from 'components/section_page/contentSectionBody'
import TitleSection from 'components/section_page/titleSection'

import TableAttendance from 'components/Attendance/TableAttendance'
import OptionsAttendanceReport from 'components/ReportAttendace/OptionsAttendance'
import moment from 'moment'

export default function ReportAttendace() {
  const [dateSelect, setDateSelect] = React.useState(
    moment(new Date()).format('YYYY/MM/DD')
  )
  const changeDateSelect = (_dateSelect) => {
    setDateSelect(_dateSelect)
  }
  console.log(
    'Jose ~ file: ReportAttendace.js ~ line 14 ~ ReportAttendace ~ dateSelect',
    dateSelect
  )

  const titleBody = {
    title: 'Reporte de Asistencias',
    description: (
      <OptionsAttendanceReport changeDateSelect={changeDateSelect} />
    ),
    iscreated: false,
    titleButtonPrimary: 'Agregar Docente',
    pathButtonPrimary: '/teachers/create',
    pathButtonBack: '/teachers',
  }
  return (
    <div>
      <ContentSectionBody
        sectionRender={<TitleSection infoSection={titleBody} />}
      />
      <ContentSectionBody
        isNonePadding={true}
        isSectionTransparent={true}
        sectionRender={
          <TableAttendance dateSelectReport={dateSelect} isReport={true} />
        }
      />
    </div>
  )
}
