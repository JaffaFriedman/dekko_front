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

export default function Calculobobina({ categoria, producto, cantidad, setCantidad }) {
    let [open, setOpen] = useState(false)
    let [ancho, setAncho] = useState(100)
    let [alto, setAlto] = useState(100)
    let [texto, setTexto] = useState('')
    let [textoReq, setTextoReq] = useState('')
    let [textoResto, setTextoResto] = useState('')

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
        const auxAltoPano = parseInt(alto) + 5;
        const auxPano = Math.ceil(parseInt(ancho) / (parseInt(p.ancho) - 10))
        const auxPanoBobina = Math.floor(parseInt(p.alto) * 100 / auxAltoPano)
        const auxBobina = Math.ceil(auxPano / auxPanoBobina);
        setCantidad(auxBobina);
        let textoBobinas = " bobinas "
        if (auxBobina === 1) textoBobinas = " bobina "
        setTexto("Para tus medidas debes comprar " + auxBobina + textoBobinas);
        let textoPano = " paños";
        if (auxPano === 1) { textoPano = " paño"; }
        const auxTexto1 = "Para el ancho de tu muro, necesitas " + auxPano + textoPano + " de " + auxAltoPano +
            " cm de altura. "
        setTextoReq(auxTexto1);

        const auxSobra = auxPanoBobina * auxBobina - auxPano
        if (auxSobra > 0) {
            let textoSobra = "Te sobra ";
            if (auxSobra > 1) { textoSobra = "Te sobran "; }
            let auxResto = Math.floor(auxAltoPano * auxSobra / 100);
            setTextoResto(textoSobra + auxResto + " mt de largo por " + p.ancho + " cm de ancho.")
        } else setTextoResto("");
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <Button onClick={handleClickOpen} color="primary"><HelpCenterIcon color="primary" />Calculadora de bobinas</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Container component='main' className='text-center'>
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
                            <h5>¿Cuántas bobinas necesito?</h5>
                            <p>Debes medir la altura del muro de piso a techo (sin incluir guardapolvos
                                y cornisas) y el ancho completo del muro
                                no importando si existen puertas o ventanas. </p>
                            <p>Si hay varios muros suma todos los anchos y usa la altura mayor. Si hay mucha diferencia de altura calcula los muros con diferencia por separado. </p>
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
                            </Container>
                            <p className="mt-5">Alto del bobina {p.alto} metros. Ancho del bobina {p.ancho} cm. </p>
                            <p>{textoReq}</p>
                            <strong>{texto} </strong>
                            <p>{textoResto}</p>
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
