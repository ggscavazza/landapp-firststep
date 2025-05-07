'use client';

import Logo from './Logo';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Logo />
      </div>

      <Button
        onClick={handleLogout}
        className="text-sm bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
      >
        Sair
      </Button>
    </header>
  );
}
