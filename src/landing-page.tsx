import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="wind"></div>
      <img src={logo} className="logo" />
    </div>
  );
}

export default LandingPage;
