import React from 'react'

import TitleSection from 'components/section_page/titleSection'
import ContentSectionBodyColumn from 'components/section_page/contentSectionBodyColumn'
import ContentSectionBody from 'components/section_page/contentSectionBody'
import EditTeacher from 'components/Teacher/EditTeacher'
import EditTeacherRight from 'components/Teacher/EditTeacherRight'

const titleBodyAdd = {
  title: 'Agregar nuevo Docentes',
  description: 'Complete los campos a continuación para crear un nuevo',
  iscreated: true,
  titleButtonPrimary: 'Agregar Docente',
  pathButtonPrimary: '/teachers/create',
  pathButtonBack: '/teachers',
}
export default function TeacherCrud() {
  return (
    <div>
      <ContentSectionBodyColumn
        sectionRenderLeft={
          <>
            <ContentSectionBody
              isSectionTransparent={true}
              sectionRender={
                <TitleSection
                  isbuttonAction={true}
                  infoSection={titleBodyAdd}
                />
              }
            />
            <ContentSectionBody
              isSectionTransparent={true}
              sectionRender={<EditTeacher />}
            />
          </>
        }
        sectionRenderRight={
          <ContentSectionBody
            isSectionTransparent={true}
            sectionRender={<EditTeacherRight />}
          />
        }
      />
    </div>
  )
}
