import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="text-container">
        <span className="desc">O Casamento de</span>
        <img src={logo} className="logo" alt="Patrícia & Rui" />
        <span className="desc">30 de Abril, 2022</span>
      </div>
      <div className="arrow-icon"></div>
    </div>
  );
}

export default LandingPage;
