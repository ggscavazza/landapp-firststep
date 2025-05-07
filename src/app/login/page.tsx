'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Digite um e-mail válido.');
      return;
    }

    const senhaForte = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    if (!senhaForte.test(password)) {
    setError('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um caractere especial.');
    return;
    }

    router.push('/home');
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-center mb-4">
                <Image
                    src="/images/logo.png"      // caminho dentro da pasta /public
                    alt="Logo"
                    width={128}            // largura da imagem em pixels
                    height={128}           // altura da imagem em pixels
                    priority              // importante para carregar no início (LCP)
                />
            </div>

            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Entrar</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        E-mail
                        </label>
                        
                        <input
                            id="email"
                            type="email"
                            className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Senha
                    </label>
                    
                    <input
                        id="password"
                        type="password"
                        className="w-full border text-gray-700 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    Entrar
                </button>
            </form>
        </div>
    </main>
  );
}
