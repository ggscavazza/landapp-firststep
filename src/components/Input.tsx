'use client';

import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  className?: string;
}

export default function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        id={id}
        className={clsx(
          'rounded-lg px-3 py-2 focus:outline-none focus:ring-2',
          className
        )}
        {...props}
      />
    </div>
  );
}
