import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user/userContext'
import { types } from '../../context/user/userReducer'
import axios from 'axios'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Olvido from '../Olvido/Olvido'
import Registro from '../Registro/Registro'

export default function Prueba () {
  /*
  const handleSubmitLogin = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }
  */

  const [, dispatch] = useContext(UserContext)
  const navigate = useNavigate()

  const initialUser = {
    email: '',
    password: ''
  }
  const [user, setUser] = useState(initialUser)

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  
  const handleSubmit = async e => {
    console.log(user)
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:4000/users/login/',
        user,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      dispatch({
        type: types.setUserState,
        payload: data
      })
      window.alert('Usuario conectado')
      navigate('/')
    } catch (error) {
    console.log(error)
      window.alert(error+'Error al conectar al usuario 1')
      dispatch({
        type: types.setError,
        payload: error
      })
    }
  }


  return (
    <div>
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
            <AccountCircle />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Ingresa a tu cuenta
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Correo electrónico'
              name='email'
              onChange={handleChange}
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Contraseña'
              type='password'
              onChange={handleChange}
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Recordar la contraseña'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresa a tu cuenta
            </Button>
            <Grid container>
              <Grid item xs>
                <Olvido />
              </Grid>
              <Grid item>
                <Registro />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}
