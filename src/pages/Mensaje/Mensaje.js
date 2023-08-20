import {useContext}  from 'react'
import { GlobalContext } from '../../context/global/globalContext'


import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'

export default function Mensaje () {
  const {mensaje ,setVisible, visible} = useContext(GlobalContext);


  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={visible}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setVisible(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         { mensaje}
        </Alert>
      </Collapse>
    </Box>
  )
}
