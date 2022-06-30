import React from 'react'
import clsx from 'clsx'
import { Button, makeStyles, Typography } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import GradeItem from './GradeItem'
// import AddIcon from '@material-ui/icons/Add'
// import PositionItem from './PositionItem'

const GradeTeacher = ({}) => {
  const classes = useStyles()
  const [grades, setGrades] = React.useState([
    { _id: 1, grade: 'MATEMATICA', section: '', degree: '' },
  ])

  const grade = { _id: 1, grade: 'MATEMATICA', section: '', degree: '' }

  const _handleAddPosition = () => {
    // dispatch(addPosition())
    setGrades((grades) => [...grades, { ...grade, _id: grades.length }])
  }

  return (
    <div className={classes.container}>
      <Typography variant='h6'>Grados Asignados</Typography>
      {grades &&
        grades.map(({ grade }, key) => (
          // <PositionItem key={position._id} position={position} />
          <GradeItem key={key} />
        ))}
      <Button
        className={clsx(classes.widthFull, classes.container)}
        color='primary'
        onClick={_handleAddPosition}
        size='small'
        startIcon={<AddIcon />}
        variant='outlined'
      >
        Agregar Nuevo Curso
      </Button>
    </div>
  )
}

const useStyles = makeStyles(
  ({ spacing }) => ({
    widthFull: {
      width: '100%',
    },
    widthPercent: {
      width: '20%',
    },
    container: {
      margin: spacing(1.5, 0, 0),
    },
    containerDetail: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: spacing(0, 0, 1.5),
    },
    margin: {
      margin: 0,
    },
    marginRight: {
      marginRight: spacing(1.5),
    },
  }),
  { name: 'PositionJob' }
)

export default React.memo(GradeTeacher)
