import { Routes, Route } from 'react-router-dom'
import Bobina from '../../pages/Bobina/Bobina'
import Metro from '../../pages/Metro/Metro'
import Buscar from '../../pages/Buscar/Buscar'
import Calculo from '../../pages/Calculo/Calculo'
import Calculobobina from '../../pages/Calculo/Calculobobina'
import Calculorollo from '../../pages/Calculo/Calculorollo'
import Carrito from '../../pages/Carrito/Carrito'
import Categorias from '../../pages/Categorias/Categorias'
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
import Products from '../../pages/Products/Products'
import Registro from '../../pages/Registro/Registro'
import Rollos from '../../pages/Rollos/Rollos'
import Separador from '../../pages/Separador/Separador'


function Rutas () {
 
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
          <Route path='/categorias/familia/:idFamilia' element={<Categorias />} />
          <Route path='/products/idFamilia/:idFamilia/idCategoria/:idCategoria' element={<Products/>} />
          <Route path='/papeles/idProducto/:idProducto' element={<Papeles />} />
          <Route path='/cortinas/idProducto/:idProducto' element={<Cortinas />} />
          <Route path='/rollos/idProducto/:idProducto' element={<Rollos />} />
          <Route path='/bobinas/idProducto/:idProducto' element={<Bobina />} />
          <Route path='/metro/idProducto/:idProducto' element={<Metro />} />
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
