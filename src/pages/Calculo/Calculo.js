import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CalculateIcon from '@mui/icons-material/Calculate';
import CancelIcon from '@mui/icons-material/Cancel';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '12rem',
    color: theme.palette.text.secondary
}))

export default function Calculo({ mt, setMt }) {
    let [open, setOpen] = useState(false)
    let [ancho, setAncho] = useState(100)
    let [alto, setAlto] = useState(100)
    let [pano, setPano] = useState('')
 
    const handleClickOpen = () => {
        setOpen(true)

    }
    const handleSubmit = event => {
        event.preventDefault()
    }
    const Calcular = () => {
        setPano(Math.ceil(ancho / 130));
        let mtl = (alto * pano + 5 * pano) / 100;
        if (mtl < 10) mtl = 10;
        setMt(Math.ceil(mtl));
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleClickOpen} color="primary"><HelpCenterIcon color="primary" />Calcular Metros Lineales</Button>

            <Dialog open={open} onClose={handleClose}>
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
                            <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                                <HelpCenterIcon />
                            </Avatar>
                            <h5>¿Cuántos metros lineales necesito?</h5>
                            <p>Debe medirse la altura del muro de piso a techo (sin incluir Guardapolvos
                                y Cornisas) y el ancho completo del muro
                                no importando si existen puertas o ventanas. El objetivo es saber el
                                número de paños que requerimos para cubrir el muro.</p>
                            <p>Un Paño es la medida dada por el alto del muro y el ancho del rollo. </p>
                           
                            <Stack
                                spacing={4}
                                direction='row'
                                sx={{ color: 'action.active' }}
                            >
                            </Stack>
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
                                <p>La compra minima es de 10 metros lineales</p>
                                <p className="mt-5">Para tu muro, necesitas {pano} paños, debes comprar {mt} metros lineales</p>

                            </Container>
                        </Box>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={Calcular}><CalculateIcon color="primary" />Calcular</Button>
                    <Button onClick={handleClose}><CancelIcon color="primary" />Cancelar</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
