import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostCard from '../components/Postcard';

const posts = [
  { id: 1, title: 'Top 10 Techno Tracks of 2023', excerpt: 'Check out the top 10 techno tracks that dominated 2023.' },
  { id: 2, title: 'How to DJ Like a Pro', excerpt: 'Learn the basics of DJing and how to improve your skills.' },
  { id: 3, title: 'The Evolution of House Music', excerpt: 'A deep dive into the history and evolution of house music.' },
];

const Blog = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Blog</h1>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;