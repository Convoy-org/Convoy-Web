import React from "react";
import { Helmet } from 'react-helmet';
import './landing.css'; // Ensure this import is present

const LandingPage = () => {
  const handleScrollToMore = () => {
    const element = document.getElementById("more");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>CNVY | Home</title>
        <meta name="description" content="Discover CNVY, an advanced convoy navigation app for car enthusiasts, created by Nathan Aruna & Domenico Velentino. Explore features, join our community, and get beta access." />
        <meta name="keywords" content="convoy navigation, car enthusiasts, real-time group alerts, seamless communication, driving experience, CNVY, beta access" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://cnvyapp.com/" />
        <meta property="og:title" content="CNVY | Home" />
        <meta property="og:description" content="Discover CNVY, an advanced convoy navigation app for car enthusiasts, created by Nathan Aruna & Domenico Velentino." />
        <meta property="og:image" content="https://www.example.com/og-image.jpg" />
        <meta property="og:url" content="https://cnvyapp.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative bg-blur-overlay">
        <div className="relative-content flex items-center justify-center h-screen px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-main mb-1">
              CNVY
            </h1>
            <p className="font-bold text-second text-xs md:text-sm mb-2">
              Domi & Nathan™
            </p>
            <button 
              onClick={handleScrollToMore}
              aria-label="Scroll down to learn more about CNVY"
              className="text-4xl md:text-5xl text-second bg-transparent border-none cursor-pointer">
              ↓
            </button>
          </div>
        </div>
      </div>
      {/* Section with id "more" */}
      <div id="more" className="flex flex-col items-center py-8 md:py-16 bg-black px-4">
        <h2 className="text-second text-xs md:text-sm mb-4 text-center max-w-3xl">
          Transform your driving experience with our advanced convoy navigation app, crafted specifically for car enthusiasts. Created by Nathan Aruna & Domenico Velentino from Montreal, QC, our platform offers real-time group alerts, seamless communication, precise directions, and synchronized music for a connected and exhilarating driving experience. Join a community where every journey becomes an adventure!
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-3xl justify-center">
          <button 
            onClick={() => console.log('Legal button clicked')} 
            className="px-4 py-2 text-white font-bold rounded  w-full md:w-auto">
            Legal
          </button>
          <button 
            onClick={() => console.log('Beta Access button clicked')} 
            className="px-4 py-2 text-white font-bold rounded  w-full md:w-auto">
            Beta Access
          </button>
          <button 
            onClick={() => console.log('About button clicked')} 
            className="px-4 py-2 text-white font-bold rounded  w-full md:w-auto">
            About
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
