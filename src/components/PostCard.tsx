interface PostCardProps {
    title: string;
    body: string;
    onClick: () => void;
  }
  
  export default function PostCard({ title, body, onClick }: PostCardProps) {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow p-4 hover:shadow-md transition"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{body}</p>
      </div>
    );
  }
  