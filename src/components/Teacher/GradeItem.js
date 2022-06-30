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
// import { additionalCertifications } from 'utils/dataTest'
// import productDucks from 'reducers/product'

import { useParams } from 'react-router'

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

export default function GradeItem({ isButtonDelete = true }) {
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

  const categorySell = [
    { title: 'ISO/IEC Certifications', codItem: 'c1' },
    { title: 'Cybersecurity Certifications', codItem: 'c2' },
    { title: 'Scrum Certifications', codItem: 'c3' },
    { title: 'DevOps Certifications', codItem: 'c4' },
    { title: 'Other Technologies', codItem: 'c5' },
    { title: 'Marketing Certifications', codItem: 'c6' },
    { title: 'Agile Certifications', codItem: 'c7' },
    { title: 'Software Certifications', codItem: 'c8' },
  ]
  const partnerSell = [
    { title: 'CERTIPROF', codItem: 'p1' },
    { title: 'CERTJOIN', codItem: 'p2' },
    { title: 'CERTMIND', codItem: 'p3' },
    { title: 'PEOPLE CERT', codItem: 'p4' },
  ]

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
            options={categorySell.map((option) => option.title)}
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
            options={partnerSell.map((option) => option.title)}
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

        <Grid item xs={12} sm={12} md={12}>
          <Autocomplete
            id='partner'
            onChange={(event, newValue) => {
              setNewProduct({ ...newProduct, partner: newValue })
            }}
            options={partnerSell.map((option) => option.title)}
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
