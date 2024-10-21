import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: '1rem' }}>Comments</h3>
      <ul style={{ padding: 0, listStyle: 'none', marginBottom: '1rem' }}>
        {comments.map((comment, index) => (
          <li key={index} style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
            {comment}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        style={{
          padding: '0.5rem',
          width: 'calc(100% - 1rem)',
          marginBottom: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleCommentSubmit}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
}
