
import React, { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home'
import CommunityPage from './pages/Community/CommunityPage'
import ForumPage from './pages/Community/ForumPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/comunidade',
    element: <CommunityPage />,
  },
  {
    path: '/comunidade/forum',
    element: <ForumPage />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
