import PostList from '../components/PostList';
import posts from '../data/posts';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Tech Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}
