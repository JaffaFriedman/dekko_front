import Container from 'react-bootstrap/Container'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
const Instructivo = () => {
  return (
    <>
    <section className='mb-5'>
      <div className='bg-dark text-bg-dark pb-2 mb-5   mb-1 text-center'>
        <h3> INSTALACIÓN DE MURALES  </h3>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4, lg: 5 }}
          columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          display='flex'
          justifyContent='center'
        >
          <Grid item className='p-2' style={{ maxWidth: '50rem' }}>
            <Container>
              <div>
                <iframe title='int1' src="https://player.vimeo.com/video/710547394?h=8e9baed86d&#038;title=0&#038;byline=0&#038;portrait=0"
                  frameBorder="0" width="800" height="600" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p><script src="https://player.vimeo.com/api/player.js"></script></p>
            </Container>
          </Grid>
          <Grid item className='p-5' style={{ maxWidth: '50rem' }}>
          <Container>
            <h4 className='mt-5'>Materiales</h4>
            <ul>
              <li>Tiptop</li>
              <li>Regla metálica</li>
              <li>Guincha de medir metálica</li>
              <li>Una escobilla, rodillo o guaipe (para aplicar el pegamento en las bajadas)</li>
              <li>Rodillo pequeño para las uniones</li>
              <li>Espátula plástica o de acrílico, ancha con canto redondeado (para eliminar burbujas)</li>
              <li>Espátula metálica (solo para cortar, no se debe paletear con esta para no rayar el papel)</li>
              <li>Esponja grande y limpia</li>
              <li>Brochas</li>
              <li>Recipiente para preparar el adhesivo</li>
              <li>Adhesivo de papel mural: Patel, sachet o metylan</li>
              <li>Colafría</li>
              <li>Opcionales: Plástico o diario para cubrir la superficie del piso (para no ensuciar)</li>
            </ul>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </section>
    </>
  )
}
 
export default Instructivo
