import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
  Autocomplete,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from 'lib/hooks'
// import { additionalCertifications } from 'utils/dataTest'
// import productDucks from 'reducers/product'

import { useParams } from 'react-router'
import GradeTeacher from './GradeTeacher'
// const {
//   creators:{
//     updateProductLocal,
//     fetchProduct
//   },
//   selectors:{
//     getProductById
//   }
// } = productDucks
export default function EditTeacher({}) {
  const classes = useStyles()
  const dispatch = useDispatch()
  // const getNewProduct = useSelector(getProductById)
  const { productId } = useParams()
  const [newProduct, setNewProduct] = React.useState({})
  const debouncedUpdateProduct = useDebounce(newProduct, 1000)

  const handleChange = (event) => {
    const typeValue = event.target.type || 'text'
    setNewProduct({
      ...newProduct,
      [event.target.name]:
        typeValue == 'number' ? Number(event.target.value) : event.target.value,
    })
  }

  // React.useEffect(() => {
  //   if(debouncedUpdateProduct !== null)
  //     dispatch(updateProductLocal(debouncedUpdateProduct))
  // }, [ debouncedUpdateProduct ])

  // React.useEffect(() => {
  //   if(productId !== null)
  //     dispatch(fetchProduct(productId))
  // }, [ productId ])

  return (
    <Box>
      <Paper className={classes.contenFormTop} elevation={4}>
        <div className={classes.contentText}>
          <TextField
            fullWidth={true}
            hiddenLabel
            id='name'
            name='name'
            onChange={handleChange}
            placeholder='NOMBRE DEL DOCENTE'
            size='small'
            value={newProduct.title}
            variant='outlined'
          />
        </div>
        <div className={classes.contentText}>
          <TextField
            fullWidth={true}
            hiddenLabel
            id='email'
            name='email'
            onChange={handleChange}
            placeholder='CORREO ELECTRONICO'
            size='small'
            value={newProduct.title}
            variant='outlined'
          />
        </div>
        <div className={classes.contentText}>
          <TextField
            fullWidth={true}
            hiddenLabel
            id='imgItem'
            name='imgItem'
            onChange={handleChange}
            placeholder='URL IMAGEN DEL DOCENTE'
            size='small'
            value={newProduct.imgItem}
            variant='outlined'
          />
        </div>
        <div className={classes.contentText}>
          <TextField
            fullWidth={true}
            hiddenLabel
            id='attachment'
            name='attachment'
            onChange={handleChange}
            placeholder='ESPECIALIDAD'
            size='small'
            value={newProduct.attachment}
            variant='outlined'
          />
        </div>
        <GradeTeacher />
        {/* </div> */}
      </Paper>
      <Paper className={classes.contenFormCenter} elevation={4}>
        <Typography variant='h5'>Información adicional</Typography>
        <Divider />
        <div className={classes.contentTextTop}>
          <TextField
            fullWidth={true}
            hiddenLabel
            id='additional'
            multiline
            name='additional'
            onChange={handleChange}
            placeholder='INGRESE DATO ADICIONAL DEL DOCENTE, EJEMPLO EXPERIENCIA LABORAL'
            rows={4}
            size='small'
            value={newProduct.additional}
            variant='outlined'
          />
        </div>
      </Paper>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  contentTextTop: {
    marginTop: theme.spacing(2.5),
  },
  contenFormTop: {
    padding: theme.spacing(3.5),
  },
  contenFormCenter: {
    padding: theme.spacing(3.5),
    marginTop: theme.spacing(5),
  },
  contentText: {
    marginBottom: theme.spacing(2.5),
  },
  contentTextFlex: {
    marginBottom: theme.spacing(2.5),
    width: '50%',
  },
  groupText: {
    display: 'flex',
    justifyContent: 'flex-start',
    '& >div': {
      marginRight: theme.spacing(2.5),
    },
  },
}))
