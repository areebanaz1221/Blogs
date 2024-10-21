import { useRouter } from 'next/router';
import posts from '../../data/posts';
import CommentSection from '../../components/CommentSection';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>{post.title}</h1>
      <p style={{ marginBottom: '2rem' }}>{post.content}</p>
      <CommentSection />
    </div>
  );
}
