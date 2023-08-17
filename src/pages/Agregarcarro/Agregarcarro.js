import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Agregarcarro({ categoria, producto, ancho, alto, cantidad, setCantidad, mt2, precio }) {
  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    });
  };
  */
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} color="primary"><ShoppingCartIcon color="primary" />Agregar al Carro</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Container component="main" maxWidth="xs" className="text-center">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                marginBottom: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p>Ancho {ancho} </p>
              <p>alto {alto} </p>
              <p>cantidad {cantidad} </p>
              <p>producto {producto} </p>
              <p>precio {precio} </p>
              <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
                <ShoppingCartIcon />
              </Avatar>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Pagar
              </Button>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
