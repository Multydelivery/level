import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaInstagram, FaTwitter, FaSoundcloud, FaSpotify, FaBandcamp } from 'react-icons/fa';
import './Home.css';
import './About.css';
import Hero from '../components/Hero';
import Social from '../components/Social';

const Home = () => {
    return (
        <div className="page-container">
            <Header />
            <main className="about-main">
              <div className="container">
                <Social />
                <Hero />
              </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;