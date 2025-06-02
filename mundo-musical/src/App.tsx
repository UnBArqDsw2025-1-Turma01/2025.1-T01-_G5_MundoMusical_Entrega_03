import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import Login from './pages/Login'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
