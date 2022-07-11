import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import CircleIcon from '@mui/icons-material/Circle'
import { Tooltip } from '@mui/material'
import ActionsAttendace from './ActionsAttendace'
import { alumnos } from 'utils/dataTest'
import moment from 'moment'
// function createData(name) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//   }
// }

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ minWidth: 220 }}>{row.name}</TableCell>
        <TableCell align='right'>
          <ActionsAttendace key={row._id} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}

// const rows = [
//   createData('Isa Norberto Reyes', 'Norberto@gmail.com', 'Matematica', 4, 3),
//   createData('Paloma Donato Morales', 'Donato@gmail.com', 'Ciencias', 4, 4),
//   createData('Reyna Pura Abascal', 'Pura@gmail.com', 'Comunicacion', 2, 3),
//   createData('Rico Yoel Busto', 'Yoel@gmail.com', 'Historia', 4, 2.5),
//   createData('Lázaro Néstor Lorenzo', 'Nestor@gmail.com', 'Matematica', 3, 1.5),
//   createData('Isa Norberto Reyes', 'Norberto@gmail.com', 'Matematica', 4, 3),
//   createData('Paloma Donato Morales', 'Donato@gmail.com', 'Ciencias', 4, 4),
//   createData('Reyna Pura Abascal', 'Pura@gmail.com', 'Comunicacion', 2, 3),
//   createData('Paloma Donato Morales', 'Donato@gmail.com', 'Ciencias', 4, 4),
//   createData('Reyna Pura Abascal', 'Pura@gmail.com', 'Comunicacion', 2, 3),
// ]

export default function TableAttendance() {
  return (
    <TableContainer component={Paper}>
      <div style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
        <div style={{ lineHeight: '2', display: 'flex' }}>
          <CircleIcon color='success' />
          ASISTIO
        </div>
        <div style={{ lineHeight: '2', display: 'flex' }}>
          <CircleIcon color='warning' />
          TARDANZA
        </div>
        <div style={{ lineHeight: '2', display: 'flex' }}>
          <CircleIcon color='error' />
          FALTA
        </div>
      </div>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Apellido y Nombre </TableCell>
            <TableCell align='center'>
              {moment(new Date()).format('DD/MM/YYYY')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alumnos
            .sort(function (a, b) {
              if (a.name > b.name) {
                return 1
              }
              if (a.name < b.name) {
                return -1
              }
              // a must be equal to b
              return 0
            })
            .map((row) => (
              <Row key={row.name} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
