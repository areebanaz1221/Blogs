"use client";

import Link from 'next/link';

export default function PostList({ posts }) {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {posts.map((post) => (
                <li
                    key={post.id}
                    style={{
                    margin: '1rem 0',
                    padding: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    transition: 'box-shadow 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
            <Link href={`/posts/${post.id}`}
                style={{ textDecoration: 'none', color: '#0070f3' }}>{post.title}
            </Link>
                </li>
            ))}
        </ul>
    );
}
