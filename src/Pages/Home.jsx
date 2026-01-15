import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaInstagram, FaTwitter, FaSoundcloud, FaSpotify, FaBandcamp } from 'react-icons/fa';
import './Home.css';
import Hero from '../components/Hero';
import Social from '../components/Social';

const Home = () => {
    return (
        <div className="page-container">
            <Header />
            <Social />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;