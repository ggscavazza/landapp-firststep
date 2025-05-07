'use client';

import { ReactNode, useState } from 'react';
import clsx from 'clsx';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
  dismissible?: boolean;
}

const iconMap = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
};

export default function Alert({ type = 'info', children, dismissible = true }: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const baseClasses =
    'w-full flex items-start justify-between gap-3 px-4 py-2 rounded-md text-sm border';

  const typeClasses = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className={clsx(baseClasses, typeClasses[type])}>
      <div className="flex items-start gap-2 flex-1">
        <span className="text-lg">{iconMap[type]}</span>
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          className="text-lg text-inherit hover:opacity-70 transition"
          aria-label="Fechar alerta"
        >
          &times;
        </button>
      )}
    </div>
  );
}
