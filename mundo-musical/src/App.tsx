import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Toaster } from 'sonner';
import { Topic } from './pages/Topic'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/topics/:id" element={<Topic />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}
