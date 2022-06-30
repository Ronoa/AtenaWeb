import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
  Autocomplete,
  Box,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from 'lib/hooks'
import DeleteIcon from '@mui/icons-material/Delete'
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
export default function GradeItem({}) {
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
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderBottom: '2px dashed',
        marginBottom: 1.5,
      }}
    >
      <div className={classes.contentGrade}>
        <div className={classes.groupText}>
          <div className={classes.contentTextFlex}>
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
          </div>
          <div className={classes.contentTextFlex}>
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
          </div>
        </div>

        <div className={classes.contentText}>
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
        </div>
      </div>
      <div>
        <IconButton aria-label='delete' className={classes.margin}>
          <DeleteIcon
            color='error'
            // onClick={_handleDeletePosition}
            size='small'
          />
        </IconButton>
      </div>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  contentGrade: {
    width: '90%',
  },
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
