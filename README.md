# Proyecto aplicación ECommerce

Este proyecto consiste en una aplicación para una tienda real de papel mural y cortinas, la idea hacer uso de distintas herramientas. 

La aplicación esta dividida en un modulo para el frontend y otro para el backend:

## Aplicación FrontEnd
La aplicación cuenta con paginas para el cliente final y una sección de administración.  

### Sección para el cliente final
Este sitio tiene las siguientes paginas para el cliente final:

Home con un carusel.
Nostros con una reseña y una lista de imagenes tipo quilt.
Tiene un catalogo que permite seleccionar las diferentes categorias de productos. La aplicación se comporta diferente en cada una de ellas:
Murales a Medida, el cliente elige la imagen, textura de papel y entrega sus medidas.
Papel de constructora, aca hay 2 opciones unos
Reservas permite reservar una mesa, desde hoy a 60 dias mas.
Inicio de Sesión con opción de registro y olvido de clave
Contacto para dejar un mensaje.
### Sección de administración
Sección de administración que permite:
    Revisar los contactos
    Revisar todas las reservas 
    Revisar las reservas de una fecha para uno o todos los locales. En esta opción lee filtrando los datos.
    Modificar o cancelar una reserva. En este caso se lee y actualiza la base de Reservas o se elimina de ella.

## Instalación

Para crear la aplicacion usamos
npx create-react-app venezia 

y luego instalamos las siguientes librerias con npm:

npm install bootstrap@5.2.3
npm install react-bootstrap bootstrap
npm i react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/joy @emotion/react @emotion/styled
npm install @mui/base
npm install @mui/system @emotion/react @emotion/styled
npm install @mui/x-data-grid
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/icons-material
npm install @fontsource/public-sans
npm install --save firebase
npm install -g firebase-tools 
 
## Deploy
Las aplicaciones se subieron a github y se uso Netlify para el deployment.

