import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}
