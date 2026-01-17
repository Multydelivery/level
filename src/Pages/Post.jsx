import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const posts = [
  { id: 1, title: 'Top 10 Techno Tracks of 2023', content: 'Here are the top 10 techno tracks of 2023...' },
  { id: 2, title: 'How to DJ Like a Pro', content: 'Learn the basics of DJing and how to improve your skills...' },
  { id: 3, title: 'The Evolution of House Music', content: 'A deep dive into the history and evolution of house music...' },
];

const Post = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  return (
    <div>
      <Header />
      <main className="about-main">
        <div className="container">
          <h1 className="hero__title">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Post;