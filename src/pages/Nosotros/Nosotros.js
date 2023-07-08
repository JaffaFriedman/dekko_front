import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from 'react-bootstrap/Card'
function srcset (image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  }
}
const itemData = [
  {
    img: 'AFR01_I_M02.JPG',
    title: 'Catalogo Africa I',
    rows: 2,
    cols: 2
  },
  {
    img: 'AFR01_W_M15.JPG',
    title: 'Catalogo Africa I'
  },
  {
    img: 'AFR02_I_M04.JPG',
    title: 'Catalogo Africa II'
  },
  {
    img: 'BOT05_W_M14.JPG',
    title: 'Catalogo Botanica V',
    cols: 2
  },
  {
    img: 'con03_I_M04.JPG',
    title: 'Catalogo Concreto III',
    cols: 2
  },
  {
    img: 'JUN03_W_M23-1.JPG',
    title: 'JUN0323',
    author: 'Catalogo Junglas III',
    rows: 2,
    cols: 2
  },
  {
    img: 'KIG06_I_M27.JPG',
    title: 'KIG0623'
  },
  {
    img: 'LIN02_I_M207.JPG',
    title: 'Clientes comiendo pasta'
  },
  {
    img: 'TEB02_W_M18.JPG',
    title: 'Chef cocinado',
    rows: 2,
    cols: 2
  },
  {
    img: 'SHI02_W_M04.PNG',
    title: 'Chef preparando carne'
  },
  {
    img: 'lin04_i_m04.JPG',
    title: 'Chef cocinado'
  },
  {
    img: 'KIB03_I_M21.jpg',
    title: 'Surtido de pastas',
    cols: 2
  }
]

const Nosotros = () => {
  return (
    <section nosotros className='mb-5'>
      <div className='bg-dark text-bg-dark pb-2 mb-5 ps-5  mb-1 text-center'>
        <h3> SOBRE NOSOTROS </h3>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 4, lg: 5 }}
          columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          display='flex'
          justifyContent='center'
        >
          <Grid item className='p-5'>
            <ImageList
              xs={{ width: 480, height: 600 }}
              sx={{ width: 640, height: 800 }}
              md={{ width: 1000, height: 800 }}
              lg={{ width: 1300, height: 1000 }}
              xl={{ width: 1500, height: 1000 }}
              variant='quilted'
              cols={4}
              rowHeight={121}
            >
              {itemData.map(item => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading='lazy'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item className='p-5' style={{ maxWidth: '50rem' }}>
            <Card className='p-3' style={{ maxWidth: '50rem' }}>
              <Card.Body>
                <Card.Title>¡Bienvenidos a Dekko! </Card.Title>
                <Card.Text>
                  Somos una empresa familiar apasionada por el diseño, y nos
                  complace presentarles nuestra historia y filosofía única.{' '}
                </Card.Text>

                <Card.Text>
                  En el año 2017, tomamos la audaz decisión de crear nuestra
                  propia línea de papeles murales. Durante muchos años, nos
                  dedicamos a la venta de papel mural importado en Katzmania. Si
                  bien este era un producto de calidad, nos dimos cuenta de que
                  tenía sus limitaciones. No permitía modificaciones y, en
                  numerosas ocasiones, experimentábamos problemas de stock que
                  afectaban a nuestros clientes.
                </Card.Text>
                <Card.Text>
                  Decidimos que era hora de un cambio y así nació Dekko. Nos
                  embarcamos en la emocionante aventura de producir nuestros
                  propios papeles murales, diseñados y fabricados a medida en un
                  tiempo récord de pocos días. Esta capacidad nos ha permitido
                  satisfacer las necesidades y deseos específicos de nuestros
                  clientes de una manera rápida y eficiente.{' '}
                </Card.Text>
                <Card.Text>
                  Pero no solo nos contentamos con ofrecer productos
                  personalizados. En Dekko, nos enorgullece colaborar
                  estrechamente con nuestros clientes para crear juntos nuevos
                  diseños. Creemos en la importancia de la creatividad y la
                  expresión individual, y eso se refleja en nuestro enfoque
                  colaborativo. Ya sea que busques un diseño único para tu
                  hogar, tu oficina o cualquier otro espacio, estamos aquí para
                  ayudarte a convertir tus ideas en realidad.
                </Card.Text>
                <Card.Text>
                  Nuestro compromiso con la calidad y la excelencia se refleja
                  en cada aspecto de nuestro trabajo. Utilizamos materiales de
                  la más alta calidad y contamos con un equipo de expertos
                  altamente capacitados en diseño y fabricación. Cada producto
                  que sale de nuestras instalaciones cumple con rigurosos
                  estándares de calidad para garantizar la satisfacción total de
                  nuestros clientes.{' '}
                </Card.Text>
                <Card.Text>
                  En Dekko, no solo vendemos papeles murales, sino que creamos
                  experiencias y transformamos espacios. Nuestro objetivo es
                  brindar un servicio excepcional y superar las expectativas en
                  cada proyecto. Estamos comprometidos con la innovación
                  constante y nos esforzamos por estar a la vanguardia de las
                  tendencias y estilos de diseño{' '}
                </Card.Text>
                <Card.Text>
                  Gracias por unirse a nosotros en este viaje. En Dekko,
                  esperamos trabajar juntos para crear ambientes impresionantes,
                  únicos y personalizados que reflejen tu estilo y personalidad.
                  ¡Bienvenidos a nuestra familia de amantes del diseño!{' '}
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </section>
  )
}
export default Nosotros
