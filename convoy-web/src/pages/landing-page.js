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
            <h1 className="text-5xl font-bold text-main">CONVOYS</h1>
            <p className="font-bold text-second text-xs">Domi & Nathan™</p>
          </a>
          <a href="#more">
            <h1 className="text-4xl text-second">↓</h1>
          </a>
        </div>
      </div>

     
    </>
  );
};

export default LandingPage;
