import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/user/userProvider.jsx'
import { GlobalProvider } from './context/global/globalProvider.jsx'
import { CarritoProvider } from './context/carrito/carritoProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <UserProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </UserProvider>
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
)
