// DashboardPage.js

import React from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <a href="/about">
            <h1 className="text-5xl font-bold text-main">CONVOY</h1>
            <p className="font-bold text-second text-xs">Domi & Nathan™</p>
          </a>
          <a href="#more">
            <h1 className="text-4xl text-second">↓</h1>
          </a>
        </div>
      </div>

      <section id="more">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow"></div>
          <footer className="footer">
            <div className="divider"></div>
            <a href="/legal">
              <button className="footer-button">Legal</button>
            </a>
            <div className="divider"></div>
            <button className="footer-button">Contributors</button>
            <div className="divider"></div>
            <a href="/about">
              <button className="footer-button">About</button>
            </a>
            <div className="divider"></div>
            <button className="footer-button">iOS</button>
            <div className="divider"></div>
            <button className="footer-button">Android</button>
            <div className="divider"></div>
          </footer>
          <div className="flex items-center justify-center pb-24 pt-19"></div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
