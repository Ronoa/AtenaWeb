import * as React from 'react'
import Box from '@mui/joy/Box'
import FormLabel from '@mui/joy/FormLabel'
import Radio, { radioClasses } from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import Sheet from '@mui/joy/Sheet'
import Done from '@mui/icons-material/Done'

export default function ActionsAttendace() {
  return (
    <RadioGroup
      aria-labelledby='product-color-attribute'
      defaultValue='warning'
      sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row' }}
    >
      {['success', 'warning', 'danger'].map((color) => (
        <Sheet
          key={color}
          sx={{
            position: 'relative',
            width: 30,
            height: 30,
            flexShrink: 0,
            bgcolor: `${color}.400`,
            color: 'white',

            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Radio
            overlay
            variant='solid'
            color={color}
            checkedIcon={
              <Done
                sx={{
                  fontSize: '2rem',
                }}
              />
            }
            value={color}
            componentsProps={{
              input: {
                'aria-label': color,
                style: {
                  'margin-left': '-30px',
                },

                // ',
              },
            }}
            sx={{
              '--joy-focus-outlineOffset': '4px',

              '--joy-palette-focusVisible': (theme) =>
                theme.vars.palette[color][500],
              [`& .${radioClasses.radio}`]: {
                display: 'contents',
                '--variant-borderWidth': '2px',
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          />
        </Sheet>
      ))}
    </RadioGroup>
  )
}
