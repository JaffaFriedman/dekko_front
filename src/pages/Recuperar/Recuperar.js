import { useState } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

export default function Recuperar () {
  const [open, setOpen] = useState(false)

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
        Enviar código de recuperación
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
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Código de recuperación enviado al correo
        </Alert>
      </Collapse>
    </Box>
  )
}
