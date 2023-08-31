import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import SearchIcon from '@mui/icons-material/Search'
import Form from 'react-bootstrap/Form'
import IconButton from '@mui/material/IconButton'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const notifyWarinng = msg => toast.warning(msg)

const Buscar = () => {
  const handleSubmit = () => {
    notifyWarinng('No encontrado, funcionalidad aún en desarrollo')
  }
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <ToastContainer position='top-center' />
      <Button onClick={handleClickOpen} color='primary'>
        <SearchIcon color='primary' fontSize='large' />
        BUSCAR
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogActions>
          <Button onClick={handleClose}>
            <CancelPresentationIcon color='primary'/>
          </Button>
        </DialogActions>
        <DialogContent>
          <Container component='main' maxWidth='xs' className='text-center'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                marginBottom: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Form className='d-flex ' onSubmit={handleSubmit}>
                <Form.Control
                  type='search'
                  placeholder='Buscar'
                  className=' me-2'
                  aria-label='Buscar'
                />
                <IconButton
                  aria-label='close'
                  color='primary'
                  size='large'
                  onClick={handleSubmit}
                >
                  <SearchIcon fontSize='large' />
                </IconButton>
              </Form>
            </Box>
          </Container>
        </DialogContent>

 
      </Dialog>
    </div>
  )
}

export default Buscar
