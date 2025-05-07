'use client';

interface PostModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  body: string;
}

export default function PostModal({ open, onClose, title, body }: PostModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{body}</p>
      </div>
    </div>
  );
}
