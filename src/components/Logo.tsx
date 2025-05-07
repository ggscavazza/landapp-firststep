'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex justify-center mb-4">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={128}
        height={128}
        priority
      />
    </div>
  );
}
