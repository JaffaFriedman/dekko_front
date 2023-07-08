import { Routes, Route } from 'react-router-dom'

import Layout from '../../components/Layout/Layout'
import Carrito from '../../pages/Carrito/Carrito'
import Catalogo from '../../pages/Catalogo/Catalogo'
import Familias from '../../pages/Familias/Familias'
import Checkout from '../../pages/Checkout/Checkout'
import Colores from '../../pages/Colores/Colores'
import Contacto from '../../pages/Contacto/Contacto'
import Construccion from '../../pages/Construccion/Construccion'
import Footer from '../../pages/Footer/Footer'
import Garantias from '../../pages/Garantias/Garantias'
import Home from '../../pages/Home/Home'
import Instructivo from '../../pages/Instructivo/Instructivo'
import Login from '../../pages/Login/Login'
import Migas from '../../pages/Migas/Migas'
import Nosotros from '../../pages/Nosotros/Nosotros'
import Olvido from '../../pages/Olvido/Olvido'
import Pago from '../../pages/Pago/Pago'
import Perfil from '../../pages/Perfil/Perfil'
import Prueba from '../../pages/Prueba/Prueba'
import Recuperar from '../../pages/Recuperar/Recuperar'
import Registro from '../../pages/Registro/Registro'
import Separador from '../../pages/Separador/Separador'
import Productos from '../../pages/Productos/Productos'
import Producto from '../../pages/Productos/Producto'
import Agregarcarro from '../../pages/Agregarcarro/Agregarcarro'
import Buscar from '../../pages/Buscar/Buscar'
import Navigation from '../Navigation/Navigation'
import React, { useState } from 'react'
import Papeles from '../../pages/Papeles/Papeles'
import Cortinas from '../../pages/Cortinas/Cortinas'
import Rollos from '../../pages/Rollos/Rollos'
import Bobinas from '../../pages/Bobinas/Bobinas'

function Rutas () {
  let [familia, setFamilia] = useState({})
  let [categoria, setCategoria] = useState({})
  let [producto, setProducto] = useState('')

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/navigation' element={<Navigation />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/construccion' element={<Construccion />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/garantias' element={<Garantias />} />
          <Route path='/instructivo' element={<Instructivo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/migas' element={<Migas />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/olvido' element={<Olvido />} />
          <Route path='/pago' element={<Pago />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/prueba' element={<Prueba />} />
          <Route path='/recuperar' element={<Recuperar />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/separador' element={<Separador />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/colores' element={<Colores />} />
          <Route path='/buscar' element={<Buscar />} />
          <Route
            path='/familias'
            element={<Familias familia={familia} setFamilia={setFamilia} />}
          />
          <Route
            path='/catalogo'
            element={
              <Catalogo
                familia={familia}
                categoria={categoria}
                setCategoria={setCategoria}
              />
            }
          />
          <Route
            path='/productos'
            element={
              <Productos
                familia={familia}
                categoria={categoria}
                producto={producto}
                setProducto={setProducto}
              />
            }
          />
          <Route
            path='/producto'
            element={
              <Producto
                familia={familia}
                categoria={categoria}
                producto={producto}
              />
            }
          />
          <Route
            path='/papeles'
            element={
              <Papeles
                familia={familia}
                categoria={categoria}
                producto={producto}
              />
            }
          />
          <Route
            path='/cortinas'
            element={
              <Cortinas
                familia={familia}
                categoria={categoria}
                producto={producto}
              />
            }
          />
          <Route
            path='/rollos'
            element={<Rollos categoria={categoria} producto={producto} />}
          />
          <Route
            path='/bobinas'
            element={<Bobinas categoria={categoria} producto={producto} />}
          />
          <Route
            path='/agregarcarro'
            element={<Agregarcarro producto={producto} />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default Rutas
