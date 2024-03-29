import React from 'react'

import ContentSectionBody from 'components/section_page/contentSectionBody'
import TitleSection from 'components/section_page/titleSection'
import TableTeacher from 'components/Teacher/TableTeachers'

const titleBody = {
  title: 'Docentes',
  description: 'Configuraciones de los docentes',
  iscreated: false,
  titleButtonPrimary: 'Agregar Docente',
  pathButtonPrimary: '/teachers/create',
  pathButtonBack: '/teachers',
}

export default function ProfilePage() {
  return (
    <div>
      <ContentSectionBody
        sectionRender={
          <TitleSection isbuttonAction={true} infoSection={titleBody} />
        }
      />
      <ContentSectionBody
        isSectionTransparent={true}
        sectionRender={<TableTeacher />}
      />
    </div>
  )
}
