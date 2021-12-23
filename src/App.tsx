import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './landing-page';
import Content from './content';
import Footer from './footer';

function App() {
  
  useEffect(() => {
    document.title = "Patrícia e Rui";  
  }, []);

  return (
    <div className="App">
      <section>
        <LandingPage />
      </section>
      <section className="information"></section>
      <section className="content">
        <Content />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
