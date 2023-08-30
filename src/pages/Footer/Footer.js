
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Typography from '@mui/joy/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import webpay from '../../images/2.WebpayPlus_FN_800px.png'
import qr from '../../images/QR-VitrinaDeComercio.png'
import { grey } from '@mui/material/colors'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'
import Contacto from '../../pages/Contacto/Contacto'
import { Fragment } from 'react'
const Footer = () => {
  let urlFacebook = 'https://www.facebook.com/search/top?q=katzmania'
  let urlInstagram = 'https://www.instagram.com/explore/tags/katzmaniaaa/'
  let urlWebpay = 'https://www.webpay.cl/company/32794'
  let urlDireccion =
    'https://www.waze.com/es-419/live-map/directions/cl/region-metropolitana/las-condes/isabel-la-catolica-7350?to=place.ChIJr7nK4PPOYpYRgqMhlyxO1A8'
  let urlWhatsapp =
    'https://api.whatsapp.com/send/?phone=56942350685&text&type=phone_number&app_absent=0'
  return (
    <footer>
      <Box className='bg-dark text-bg-dark' sx={{ flexGrow: 1, padding: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          columns={{ xs: 1, sm: 2, md: 3, lg: 6 }}
          display='flex'
          justifyContent='center'
        >
          <Grid item md={2}>
          <Typography level='body' className='bg-dark text-bg-dark'>
              <Fragment>
                <Contacto />
              </Fragment>
            </Typography>
            <Typography level='body' sx={{ color: grey[50] }}>
              <LocationOnIcon fontSize='medium' /> Isabel la Catolica 7350, Las
              Condes
            </Typography>
            <Link
              href={urlDireccion}
              underline='none'
              target='_blank'
              sx={{ color: grey[50] }}
            >
              <NotListedLocationIcon fontSize='medium' /> Como llegar
            </Link>

            <Typography level='body' sx={{ color: grey[50] }}>
              <CallIcon fontSize='medium' /> Telefonos: +569 1111 2222 +569 3333
              4444{' '}
            </Typography>
            <Typography level='body' sx={{ color: grey[50] }}>
              <AccessTimeIcon fontSize='medium' /> Lunes a Jueves 10:00 a 18:00,
              Viernes hasta 16:00
            </Typography>
          </Grid>
          <Grid item md={2}>
          <Typography level='h6'>
              {' '}
              <Link sx={{ color: grey[50] }} underline='none' href='/nosotros'>
                Sobre Nosotros
              </Link>{' '}
            </Typography>
            <Typography level='h6'>
              {' '}
              <Link sx={{ color: grey[50] }} underline='none' href='/garantias'>
                Garantias y condiciones generales
              </Link>{' '}
            </Typography>
            <Typography level='h6'>
              {' '}
              <Link
                sx={{ color: grey[50] }}
                underline='none'
                href='/instructivo'
              >
                Instalación de murales
              </Link>
            </Typography>
            <Typography level='h6'> </Typography>
          </Grid>
          <Grid item md={2}>
            <Row xs={2}>
              <Col>
                <Link href={urlWebpay} target='_blank'>
                  <img width={150} alt='webpat' src={webpay} />{' '}
                </Link>
                <p className='mt-2'>
                  <img
                    src={qr}
                    height='70'
                    className='d-inline-block'
                    alt='LogoQr'
                  />
                </p>
              </Col>
              <Col className='m-2'>
                <Link href={urlFacebook} target='_blank'>
                  <FacebookIcon sx={{ color: grey[50] }} fontSize='medium' />{' '}
                </Link>
                <Link href={urlInstagram} target='_blank'>
                  <InstagramIcon sx={{ color: grey[50] }} fontSize='medium' />{' '}
                </Link>
                <Link href={urlWhatsapp} target='_blank'>
                  <WhatsAppIcon sx={{ color: grey[50] }} fontSize='medium' />{' '}
                </Link>
              </Col>
            </Row>
          </Grid>
        </Grid>
      </Box>
    </footer>
  )
}

export default Footer
