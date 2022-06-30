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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '5to',
        customerId: 'A',
        amount: 'Aritmetica',
        hours: 1,
      },
      {
        date: '4to',
        customerId: 'B',
        amount: 'Algebra',
        hours: 1,
      },
      {
        date: '3ro',
        customerId: 'A',
        amount: 'Matematica',
        hours: 1,
      },
    ],
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.calories}</TableCell>
        <TableCell align='right'>{row.fat}</TableCell>
        <TableCell align='right'>{row.carbs}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Grados Asignados
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Grado</TableCell>
                    <TableCell>Seccion</TableCell>
                    <TableCell>Curso</TableCell>
                    <TableCell align='right'>Horas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell align='right'>{historyRow.hours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
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
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}

const rows = [
  createData('Isa Norberto Reyes', 'Norberto@gmail.com', 'Matematica', 4, 3),
  createData('Paloma Donato Morales', 'Donato@gmail.com', 'Ciencias', 4, 4),
  createData('Reyna Pura Abascal', 'Pura@gmail.com', 'Comunicacion', 2, 3),
  createData('Rico Yoel Busto', 'Yoel@gmail.com', 'Historia', 4, 2.5),
  createData('Lázaro Néstor Lorenzo', 'Nestor@gmail.com', 'Matematica', 3, 1.5),
]

export default function TableTeacher() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre y Apellido</TableCell>
            <TableCell align='center'>Correo</TableCell>
            <TableCell align='center'>Especialidad</TableCell>
            <TableCell align='right'>Grados</TableCell>
            <TableCell align='right'>Horas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
