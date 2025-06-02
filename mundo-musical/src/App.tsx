import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import Login from './pages/Login'
import { Toaster } from 'sonner'
import { Topic } from './pages/Topic'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/topics/:id" element={<Topic />} />
      </Routes>

      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
