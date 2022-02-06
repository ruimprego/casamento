import React, { useEffect, useRef } from 'react';
import './App.css';
import LandingPage from './landing-page';
import Content from './content';
import Footer from './footer';
import Information from './information';

function App() {
  
  useEffect(() => {
    document.title = "Patrícia & Rui";
  }, []);

  const contentRef = useRef<HTMLDivElement>(null);

  const scrollPage = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView();
    }
  }

  return (
    <div className="App">
      <section>
        <LandingPage scroll={scrollPage} />
      </section>
      <div className="bg-reset">
      <section ref={contentRef} className="content">
        <Content />
      </section>
      <section className="info">
        <Information />
      </section>
      <section className="footer">
        <Footer />
      </section>
      </div>
    </div>
  );
}

export default App;
