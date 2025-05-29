import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Rende o componente App que contém suas rotas
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)