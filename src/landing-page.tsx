import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import hexagon from './assets/Hexagon.svg';
import translate from './translate';
import LanguagePicker from './language-picker';

function LandingPage() {
  const homeScreen = translate.use().homeScreen;
  return (
    <div className="landing-page">
      <div className="language-picker-wrapper">
        <LanguagePicker />
      </div>
      <div className="hexagon-container">
      <img src={hexagon} className="background-hexagon" alt="background"/>
        <div className="text-container">
          <div className="landing-title">{homeScreen.weddingTitle}</div>
          <img src={logo} className="logo" alt="Patrícia & Rui" />
          <div className="date-wrapper">
            <span className="month">{homeScreen.april}</span>
            <span className="day">30</span>
            <span className="year">2022</span>
          </div>
        </div>
      </div>
      
      <div className="arrow-icon"></div>
    </div>
  );
}

export default LandingPage;
