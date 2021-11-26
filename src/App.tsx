import React from 'react';
import './App.css';
import LandingPage from './landing-page';
import Content from './content';

function App() {
  return (
    <div className="App">
      <section className="landing-page">
        <LandingPage />
      </section>
      <section className="content">
        <Content />
      </section>
    </div>
  );
}

export default App;
