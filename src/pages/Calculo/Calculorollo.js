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
import tablaProductos from '../../pages/Tablas/Tablaproductos'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '12rem',
    color: theme.palette.text.secondary
}))

export default function Calculorollo({ categoria, producto, rollo, setRollo }) {
    let [open, setOpen] = useState(false)
    let [ancho, setAncho] = useState(100)
    let [alto, setAlto] = useState(100)
    let [pano, setPano] = useState('')
    let [panoRollo, setPanoRollo] = useState('')
    let [altoPano, setAltoPano] = useState('')
    let [texto, setTexto] = useState('')
    const p = tablaProductos.find(c => c.nombre.toString() === producto.toString() &&
        c.categoria.toString() === categoria.categoria &&
        c.familia === categoria.familia)

    const handleClickOpen = () => {
        Calcular();
        setOpen(true)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }
    const Calcular = () => {
        const auxAltoPano = parseInt(alto) + 5 + parseInt(p.calce);
        setAltoPano(auxAltoPano);
        const auxPano = Math.ceil(ancho / p.ancho)
        setPano(auxPano);
        const auxPanoRollo = Math.floor(p.alto * 100 / auxAltoPano)
        setPanoRollo(auxPanoRollo);
        const auxRollo = Math.ceil(auxPano / auxPanoRollo);
        setRollo(auxRollo);
        const auxSobra = auxPanoRollo   - auxPano
        const auxTexto = "Para el ancho de tu muro, necesitas "+ pano+" paño(s) de " +altoPano+
        " cm de altura. Debes comprar "+rollo+" rollos(s). El rollo rinde "+panoRollo+ " paños. "
         if (auxSobra>0)
        {    let auxResto = Math.floor( auxAltoPano*auxSobra/100 );
  
            setTexto(auxTexto +"Te sobra(n) " + auxSobra+ " paños que equivalen a "+ auxResto + " mt de largo por " + p.ancho+ " cm de ancho.")
 
        } else  setTexto(auxTexto);

    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <Button onClick={handleClickOpen} color="primary"><HelpCenterIcon color="primary" />Ayuda para calcular Rollos</Button>

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
                            <h5>¿Cuántas rollos necesito?</h5>
                            <p>Debes medir la altura del muro de piso a techo (sin incluir guardapolvos
                                y cornisas) y el ancho completo del muro
                                no importando si existen puertas o ventanas. </p>
                            <p>El objetivo es saber el
                                número de paños que requerimos para cubrir el muro y el rendimiento de cada rollo.</p>
                            <p>Nosotros consideraremos un excedente de 5cm en el ancho y alto para diferencias en el muro y errores en la medida</p>
                            <p>Si hay varios muros suma todos los anchos y usa la altura mayor. Si hay mucha diferencia de altura calcula los paños por separado. {texto}</p>
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
                                <p className="mt-5">Alto del rollo {p.alto} metros. Ancho del rollo {p.ancho} cm. Calce del papel entre bajadas {p.calce} cm.</p>
                                <h6 className="mt-5" >{texto} </h6>
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
