'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Alert from '@/components/Alert';
import PostCard from '@/components/PostCard';
import PostModal from '@/components/PostModal';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const POSTS_PER_PAGE = 10;

  // Scroll infinito com IntersectionObserver
  useEffect(() => {
    const target = observerRef.current;
    if (!target) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );
  
    observer.observe(target);
  
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [loading]);  

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`
        );
        if (!res.ok) throw new Error('Erro ao carregar posts.');
        const data = await res.json();
        setPosts((prev: Post[]) => {
            const ids = new Set(prev.map((p) => p.id));
            const newPosts = data.filter((p: Post) => !ids.has(p.id));
            return [...prev, ...newPosts];
        });          
      } catch (err) {
        console.log('=========> Erro: ', err)
        setError('Não foi possível carregar os posts. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
  
    loadPosts();
  }, [page]);

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 p-4 pt-6 min-h-screen">
        {error && <Alert type="error">{error}</Alert>}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              onClick={() => setSelectedPost(post)}
            />
          ))}

          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow animate-pulse"
              >
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-1 w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
        </div>

        {/* âncora para scroll infinito */}
        <div ref={observerRef} className="h-1" />

        {/* Modal de post completo */}
        {selectedPost && (
          <PostModal
            open={true}
            title={selectedPost.title}
            body={selectedPost.body}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </main>
    </>
  );
}
