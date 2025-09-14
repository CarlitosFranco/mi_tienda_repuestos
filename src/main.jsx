// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Contacto from './pages/Contacto'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Inicio />
      },
      {
        path: "catalogo",
        element: <Catalogo />
      },
      {
        path: "contacto",
        element: <Contacto />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)