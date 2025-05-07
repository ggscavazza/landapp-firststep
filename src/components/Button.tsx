'use client';

import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-semibold py-2 px-4 rounded-lg transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
