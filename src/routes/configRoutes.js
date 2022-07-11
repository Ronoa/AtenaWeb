import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CategoryIcon from '@mui/icons-material/Category'
import SchoolIcon from '@mui/icons-material/School'

import { ProtectedRoute } from 'components/Auth/ProtectedRoute'
import Loading from 'components/Common/Loading'

const Dashboard = React.lazy(() => import('containers/page/Dashboard'))
const Teachers = React.lazy(() => import('containers/page/Teachers'))
const TeacherCrud = React.lazy(() => import('containers/page/TeachersCrud'))
const Attendance = React.lazy(() => import('containers/page/Attendance'))
const ReportAttendace = React.lazy(() =>
  import('containers/page/ReportAttendace')
)

export const ElementeRouterProtect = (componente) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <ProtectedRoute>{componente}</ProtectedRoute>
    </React.Suspense>
  )
}

export const optionsRoutesNavBar = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    elementComponent: ElementeRouterProtect(<Dashboard />),
    path: '/home',
  },
  // {
  //   label: 'Institucion',
  //   icon: <SchoolIcon />,
  //   elementComponent: null,
  //   path: '/',
  // },
  {
    label: 'Docentes',
    icon: <PeopleIcon />,
    elementComponent: ElementeRouterProtect(<Teachers />),
    path: '/teachers',
  },
  {
    label: 'Docentes',
    icon: <PeopleIcon />,
    elementComponent: ElementeRouterProtect(<TeacherCrud />),
    path: '/teachers/create',
    isNotVisible: true,
  },
  // {
  //   label: 'Aulas',
  //   icon: <CategoryIcon />,
  //   elementComponent: null,
  //   path: '/',
  // },

  {
    label: 'Asistencia',
    icon: <FactCheckIcon />,
    elementComponent: ElementeRouterProtect(<Attendance />),
    path: '/asistencia',
  },
  {
    label: 'Reportes',
    icon: <BarChartIcon />,
    elementComponent: ElementeRouterProtect(<ReportAttendace />),
    path: '/report',
  },
]
