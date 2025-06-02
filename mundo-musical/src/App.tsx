import { Toaster } from 'sonner'
import { Home } from './pages/Home'
import {CommunityPage } from './pages/Community/CommunityPage'

function App() {

  return (
    <>
      <Home />
      <CommunityPage />
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
