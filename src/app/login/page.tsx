'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Alert from '@/components/Alert';

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
            <Logo />

            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Entrar</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                    <Alert type="error">
                        {error}
                    </Alert>
                )}

                <Input
                    id="email"
                    label="E-mail"
                    type="email"
                    className='w-full border text-gray-700 border-gray-300 focus:ring-orange-500'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <Input
                    id="password"
                    label="Senha"
                    type="password"
                    className='w-full border text-gray-700 border-gray-300 focus:ring-orange-500'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />                

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white">
                    Entrar
                </Button>
            </form>
        </div>
    </main>
  );
}
