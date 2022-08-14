import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

 
import AssignmentIcon from '@mui/icons-material/Assignment'
// import { optionsRoutesNavBar } from './routes/configRoutes'
import { Tooltip } from '@mui/material'
import { optionsRoutesNavBar } from '../../routes/configRoutes'

export const mainListItems = (
  <React.Fragment>
    {optionsRoutesNavBar
      .filter(({ isNotVisible }) => !isNotVisible)
      .map(({ label, icon, path }, index) => (
        <ListItemButton key={index} to={path}>
          <Tooltip title={label}>
            <ListItemIcon>{icon}</ListItemIcon>
          </Tooltip>
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Current month' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
)
