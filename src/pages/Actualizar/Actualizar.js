import * as React from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

export default function Actualizar () {
  const [open, setOpen] = React.useState(false)

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        disabled={open}
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          setOpen(true)
        }}
      >
        {' '}
        Actualizar Contraseña
      </Button>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='large' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Contraseña Actualizada
        </Alert>
      </Collapse>
    </Box>
  )
}
