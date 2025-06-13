// src/pages/HomePage.js (Example structure)
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CallToAction from '../components/CallToAction';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <BlogSection />
      <Footer />
    </>
  );
};

export default HomePage;