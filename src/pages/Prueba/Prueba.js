import * as React from 'react';
import Container from 'react-bootstrap/Container'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '12rem',
  color: theme.palette.text.secondary
}))



export default function Prueba() {
  let [ancho, setAncho] = useState(100)
  let [alto, setAlto] = useState(100)
  let [pano, setPano] = useState('')
  let [mt, setMt] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
  }
  const Calcular = () => {
    setPano(Math.ceil(ancho / 130));
    let mtl = (alto * pano + 5 * pano)/100;
    if (mtl < 10) mtl = 10;
    setMt(Math.ceil(mtl));
  }

  return (
    <>
      <div className='bg-dark text-bg-dark pb-2 ps-5  mb-1 text-center'>
        <h3>
          ¿Cómo medir?
        </h3>
      </div>
      <Container>
        <Box
          component='form'
          onSubmit={handleSubmit}
          Validate
          sx={{ mt: 1 }}
        >
          <Stack direction='row' spacing={2}>
            <Item>
              <TextField
                margin='normal'
                required
                fullWidth
                variant='standard'
                type='number'
                id='ancho'
                label='Ancho del muro en cm'
                placeholder='Ingresa el ancho del muro en cm'
                name='ancho'
                autoComplete='ancho'
                value={ancho}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  setAncho(event.target.value)
                }}
                autoFocus
              />
            </Item>
            <Item>
              <TextField
                margin='normal'
                required
                fullWidth
                variant='standard'
                type='number'
                name='alto'
                label='Alto del muro en cm'
                id='alto'
                placeholder='Ingresa el alto del muro en cm'
                autoComplete='alto'
                value={alto}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>
                ) => {
                  setAlto(event.target.value)
                }}
              />
            </Item>
          </Stack>
        </Box>
        <Button
          variant='text'
          sx={{ mt: 3, mb: 2 }}
          color='primary'
          onClick={() => Calcular()}
        >
          Calcular
        </Button>
        <p>Paños {pano}</p>
        <p>Metros Lineales {mt} </p>
      </Container>
    </>
  );
}


