import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
  Alert,
  Button,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'

// import AllPagesPDFViewer from './components/pdf/all-pages'
import CloseIcon from '@mui/icons-material/Close'

export default function EditTeacherRight({}) {
  const classes = useStyles()
  const [openAlert, setOpenAlert] = React.useState(false)
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch(postProduct({}))
  }
  const getNewProduct = {}

  // React.useEffect(() => {
  //   if (status === 'SAVED') setOpenAlert(true)
  // }, [status])

  return (
    <Box>
      <Collapse in={openAlert}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              onClick={() => {
                setOpenAlert(false)
              }}
              size='small'
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Se guardo Correctamente
        </Alert>
      </Collapse>
      <Paper className={classes.contenFormTop} elevation={4}>
        <Typography variant='h5'>Accion</Typography>
        <Divider />

        <div className={classes.groupButtons}>
          <Button
            color='primary'
            fullWidth={true}
            onClick={handleSave}
            variant='contained'
          >
            Guardar
          </Button>
        </div>
        <div className={classes.groupButtons}>
          <Button
            variant='outlined'
            color='primary'
            fullWidth={true}
            onClick={handleSave}
          >
            Eliminar
          </Button>
        </div>
      </Paper>
      <Paper
        sx={{ marginBottom: 3 }}
        className={classes.contenImgItem}
        elevation={4}
      >
        <Typography align='left' variant='h5'>
          Imagen cargada
        </Typography>
        <img className={classes.imgPreview} src={getNewProduct.imgItem} />
      </Paper>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  imgPreview: {
    width: 250,
    minHeight: 'inherit',
  },
  contentTextTop: {
    marginTop: theme.spacing(2.5),
  },
  contenFormTop: {
    padding: theme.spacing(3.5),
  },
  contenImgItem: {
    padding: theme.spacing(3.5),
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  contentText: {
    marginBottom: theme.spacing(2.5),
  },
  groupButtons: {
    margin: theme.spacing(2.5),
    display: 'flex',
    justifyContent: 'space-around',
    '& >div': {
      marginRight: theme.spacing(2.5),
    },
  },
}))
