import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { authSubject } from '@/observer/AuthSubject';
import { SimpleObserver } from '@/observer/SimpleObserver';
import { Button } from '@/components/ui/button';
import logo from '@/assets/images/logo.png';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => authSubject.getAuthStatus());

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new SimpleObserver((auth) => {
      setIsAuthenticated(auth);
      setIsLoading(false);
    });

    authSubject.subscribe(observer);

    return () => {
      authSubject.unsubscribe(observer);
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/topics/:id', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const sucesso = authSubject.loginUser(usuario, senha);

      if (sucesso) {
        toast.success('Login realizado com sucesso!');
      } else {
        toast.error('Credenciais inválidas!');
        setIsLoading(false);
      }
    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:flex flex-1 bg-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <img src={logo} alt="Logo do site" className="mx-auto w-82 h-82 object-contain" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Aprenda, acompanhe seu progresso e interaja com outros usuários.
          </h2>
          <p className="text-gray-600">Simples, prático e feito pra você.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Faça login na sua conta</h1>
            <p className="text-gray-600">Insira seus dados para acessar a sua conta.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">
                Usuário
              </label>
              <input
                id="usuario"
                type="text"
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Carregando...
                </span>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
