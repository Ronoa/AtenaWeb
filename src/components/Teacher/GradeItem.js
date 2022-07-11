import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from 'lib/hooks'
import DeleteIcon from '@mui/icons-material/Delete'
import moment from 'moment'
// import { additionalCertifications } from 'utils/dataTest'
// import productDucks from 'reducers/product'

import { cursos, grado, seccion } from 'utils/dataTest'

// const {
//   creators:{
//     updateProductLocal,
//     fetchProduct
//   },
//   selectors:{
//     getProductById
//   }
// } = productDucks

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function GradeItem({
  isButtonDelete = true,
  isReport = false,
  changeDateSelect,
}) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [dateSelect, setDateSelect] = React.useState(
    moment(new Date()).format('YYYY/MM/DD')
  )

  // const getNewProduct = useSelector(getProductById)

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

  const handleChangeDate = (event) => {
    setDateSelect(event.target.value)
    changeDateSelect(event.target.value)
  }

  return (
    <Box
      sx={{
        // display: 'flex',
        // alignItems: 'center',
        // width: '100%',
        // borderBottom: '2px dashed',
        // marginBottom: 1.5,
        flexGrow: 1,
      }}
    >
      {isButtonDelete ? (
        <div className={classes.contentGrade}>
          <Typography>Item </Typography>
          <div>
            <IconButton aria-label='delete' className={classes.margin}>
              <DeleteIcon
                color='error'
                // onClick={_handleDeletePosition}
                size='small'
              />
            </IconButton>
          </div>
        </div>
      ) : null}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={4} md={6}>
          <Autocomplete
            sx={{ width: '100%' }}
            fullWidth
            id='category'
            onChange={(event, newValue) => {
              setNewProduct({ ...newProduct, category: newValue })
            }}
            options={grado.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth={true}
                id='degree'
                label='Seleccione Grado'
                name='degree'
              />
            )}
            size='small'
            value={newProduct.category}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Autocomplete
            id='partner'
            onChange={(event, newValue) => {
              setNewProduct({ ...newProduct, partner: newValue })
            }}
            options={seccion.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth={true}
                id='section'
                label='Seleccione Sección'
                name='section'
              />
            )}
            size='small'
            value={newProduct.partner}
          />
        </Grid>

        <Grid item xs={12} sm={!isReport ? 12 : 4} md={!isReport ? 12 : 6}>
          <Autocomplete
            id='partner'
            onChange={(event, newValue) => {
              setNewProduct({ ...newProduct, partner: newValue })
            }}
            options={cursos.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth={true}
                id='grade'
                label='Seleccione Curso'
                name='grade'
              />
            )}
            size='small'
            value={newProduct.partner}
          />
        </Grid>
        {isReport ? (
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              id='date'
              label='Fecha'
              type='date'
              size='small'
              fullWidth={true}
              value={dateSelect}
              onChange={handleChangeDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        ) : null}
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  contentGrade: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))
