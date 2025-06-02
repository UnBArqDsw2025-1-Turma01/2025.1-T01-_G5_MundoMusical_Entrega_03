import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute'; // importa o PrivateRoute
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Routes>
        {/* rota pública */}
        <Route path="/login" element={<Login />} />

        {/* rotas protegidas - qualquer rota dentro do PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/*" element={<Home />} />
          {/* aqui pode adicionar mais rotas protegidas, ex: <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}
