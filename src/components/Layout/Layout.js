import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../routes/Navigation/Navigation'
import Footer from '../../pages/Footer/Footer'
import Separador from '../../pages/Separador/Separador'
const Layout = () => {
  return (
    <div>
      <Navigation />
      <Separador />
      <Outlet />
      <Separador />
      <Footer />
    </div>
  )
}

export default Layout