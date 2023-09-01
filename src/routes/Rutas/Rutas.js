import { Routes, Route } from 'react-router-dom'
import Bobina from '../../pages/Bobina/Bobina'
import Metro from '../../pages/Metro/Metro'
import Buscar from '../../pages/Buscar/Buscar'
import Calculo from '../../pages/Calculo/Calculo'
import Calculobobina from '../../pages/Calculo/Calculobobina'
import Calculorollo from '../../pages/Calculo/Calculorollo'
import Carrito from '../../pages/Carrito/Carrito'
import Catalogo from '../../pages/Catalogo/Catalogo'
import MiPerfil from '../../pages/MiPerfil/MiPerfil'
import Contacto from '../../pages/Contacto/Contacto'
import Cortinas from '../../pages/Cortinas/Cortinas'
import Familias from '../../pages/Familias/Familias'
import Footer from '../../pages/Footer/Footer'
import Garantias from '../../pages/Garantias/Garantias'
import Home from '../../pages/Home/Home'
import Instructivo from '../../pages/Instructivo/Instructivo'
import Layout from '../../components/Layout/Layout'
import Login from '../../pages/Login/Login'
import Logout from '../../pages/Login/Logout'
import Navigation from '../Navigation/Navigation'
import Nosotros from '../../pages/Nosotros/Nosotros'
import Pago from '../../pages/Pago/Pago'
import Papeles from '../../pages/Papeles/Papeles'
import Productos from '../../pages/Productos/Productos'
import Registro from '../../pages/Registro/Registro'
import Rollos from '../../pages/Rollos/Rollos'
import Separador from '../../pages/Separador/Separador'
import { useState } from 'react'


function Rutas () {
  const [idProducto, setIdProducto] = useState('')

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/buscar' element={<Buscar />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/miPerfil' element={<MiPerfil />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/garantias' element={<Garantias />} />
          <Route path='/instructivo' element={<Instructivo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/navigation' element={<Navigation />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/pago' element={<Pago />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/separador' element={<Separador />} />
          <Route path='/familias' element={<Familias />} />
          <Route path='/catalogo/familia/:familiaIdx' element={<Catalogo />} />
          <Route path='/productos/familia/:familiaIdx/catalogo/:idCatalogo' element={<Productos/>} />
          <Route path='/papeles/familia/:familiaIdx/catalogo/:idCatalogo/producto/:idProducto' element={<Papeles />} />
          <Route path='/cortinas/familia/:familiaIdx/catalogo/:idCatalogo/producto/:idProducto' element={<Cortinas />} />
          <Route path='/rollos/familia/:familiaIdx/catalogo/:idCatalogo/producto/:idProducto' element={<Rollos />} />
          <Route path='/bobina/familia/:familiaIdx/catalogo/:idCatalogo/producto/:idProducto' element={<Bobina />} />
          <Route path='/metro/familia/:familiaIdx/catalogo/:idCatalogo/producto/:idProducto' element={<Metro />} />
          <Route path='/calculo' element={<Calculo />} />
          <Route path='/calculobobina' element={<Calculobobina />} />
          <Route path='/calculorollo' element={<Calculorollo />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default Rutas
